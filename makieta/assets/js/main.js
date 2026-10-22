// Maldach – makieta strony głównej. Bez zależności; w motywie: wp_enqueue_script.
(() => {
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  // Wejścia sekcji: raz, gdy element wejdzie w widok
  const reveals = $$('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-in'));
  }

  // Menu mobilne
  const menuBtn = $('[data-menu-toggle]');
  const menu = $('[data-menu]');
  if (menuBtn && menu) {
    const setMenu = (open) => {
      menu.toggleAttribute('data-open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
    };
    menuBtn.addEventListener('click', () => setMenu(!menu.hasAttribute('data-open')));
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.hasAttribute('data-open')) { setMenu(false); menuBtn.focus(); }
    });
  }

  // Dolny pasek z telefonem: pokazuje się po zjechaniu z hero, znika nad sekcjami z własnym telefonem
  const callbar = $('[data-callbar]');
  const hero = $('[data-hero-section]');
  if (callbar && hero && 'IntersectionObserver' in window) {
    const visible = new Set();
    const update = () => callbar.toggleAttribute('data-show', visible.size === 0);
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) e.isIntersecting ? visible.add(e.target) : visible.delete(e.target);
      update();
    });
    [hero, ...$$('[data-has-phone]')].forEach((el) => io.observe(el));
  } else if (callbar) {
    callbar.setAttribute('data-show', '');
  }

  // Suwak przed/po: bezpośrednia manipulacja, bez animacji
  $$('[data-compare]').forEach((box) => {
    const range = $('[data-compare-range]', box);
    const stopHint = () => box.classList.remove('is-hinting');
    const set = () => { stopHint(); box.style.setProperty('--pos', `${range.value}%`); };
    range.addEventListener('input', set);
    range.addEventListener('pointerdown', stopHint);
    box.addEventListener('animationend', stopHint);
    set();

    // Jednorazowa podpowiedź: suwak sam przesuwa się raz, gdy pierwszy raz pojawi się w widoku
    const reduce = matchMedia('(prefers-reduced-motion: reduce)');
    if (!reduce.matches && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver(([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        setTimeout(() => box.classList.add('is-hinting'), 550);
      }, { threshold: 0.6 });
      io.observe(box);
    }
  });

  // FAQ
  $$('[data-faq] .faq__item').forEach((item) => {
    const btn = $('button', item);
    btn.addEventListener('click', () => {
      const open = !item.hasAttribute('data-open');
      item.toggleAttribute('data-open', open);
      btn.setAttribute('aria-expanded', String(open));
    });
  });

  // Formularz wyceny
  const form = $('[data-quote-form]');
  const opis = $('#f-opis');
  const addToOpis = (line) => {
    if (!opis || opis.value.includes(line)) return;
    opis.value = opis.value.trim() ? `${opis.value.trim()}\n${line}` : line;
  };

  // Karta usługi zaznacza usługę w formularzu
  $$('[data-service]').forEach((a) => {
    a.addEventListener('click', () => {
      const box = form && $(`input[name="usluga"][value="${a.dataset.service}"]`, form);
      if (box) box.checked = true;
    });
  });

  if (form) {
    form.noValidate = true;
    const status = $('[data-form-status]', form);
    const messages = {
      imie: 'Podaj imię.',
      telefon: 'Podaj numer telefonu, co najmniej 9 cyfr.',
      miejscowosc: 'Podaj miejscowość.',
      zgoda: 'Zaznacz zgodę na kontakt, inaczej nie możemy oddzwonić.',
    };
    const check = (field) => {
      const err = document.getElementById(`${field.id || 'f-zgoda'}-err`);
      const ok = field.checkValidity();
      field.setAttribute('aria-invalid', String(!ok));
      if (err) {
        err.hidden = ok;
        err.textContent = ok ? '' : messages[field.name];
        field.setAttribute('aria-describedby', err.id);
      }
      return ok;
    };
    const required = $$('[required]', form);
    required.forEach((f) => f.addEventListener(f.type === 'checkbox' ? 'change' : 'blur', () => {
      if (f.type === 'checkbox' || f.hasAttribute('aria-invalid')) check(f);
    }));
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const invalid = required.filter((f) => !check(f));
      if (invalid.length) {
        status.hidden = true;
        invalid[0].focus();
        return;
      }
      status.hidden = false;
      status.textContent = 'Formularz jest poprawny. To makieta, więc nic nie zostało wysłane; wysyłkę podłączymy w WordPressie.';
    });
  }

  // Kalkulator dachu: rzut domu + okap 50 cm z każdej strony, podzielony przez cos kąta.
  // Działa dla dachu dwu- i czterospadowego o jednym kącie nachylenia.
  const calc = $('[data-calc]');
  if (calc) {
    calc.hidden = false;
    const len = $('[data-calc-length]', calc);
    const wid = $('[data-calc-width]', calc);
    const ang = $('[data-calc-angle]', calc);
    const out = $('[data-calc-result]', calc);
    const EAVE = 0.5;
    let area = 0;
    const update = () => {
      const l = parseFloat(String(len.value).replace(',', '.'));
      const w = parseFloat(String(wid.value).replace(',', '.'));
      const a = parseFloat(ang.value);
      if (!(l > 0 && w > 0)) { out.textContent = '— m²'; area = 0; return; }
      area = Math.round(((l + 2 * EAVE) * (w + 2 * EAVE)) / Math.cos((a * Math.PI) / 180));
      out.textContent = `${area} m²`;
    };
    [len, wid, ang].forEach((el) => el.addEventListener('input', update));
    update();
    $('[data-calc-add]', calc).addEventListener('click', () => {
      if (!area) return;
      addToOpis(`Dach ok. ${area} m² (dom ${len.value} × ${wid.value} m, kąt ${ang.value}°)`);
      document.getElementById('wycena').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      opis?.focus({ preventScroll: true });
    });
  }
})();
