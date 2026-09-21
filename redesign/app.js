/* MyCER redizajn — interakcije
   Sve efekte preslikane iz Tradelab (Framer) teardowna:
   Lenis smooth scroll · scroll reveal · count-up · akordeon ·
   Vimeo lazy facade · countdown · mobilni meni                     */

(function () {
  'use strict';

  /* ---------- 1. Lenis smooth scroll ---------- */
  function initLenis() {
    if (typeof window.Lenis !== 'function') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var lenis = new window.Lenis({ duration: 1.1, smoothWheel: true, wheelMultiplier: 1 });
    function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href');
        if (!id || id === '#') return;
        var t = document.querySelector(id);
        if (!t) return;
        e.preventDefault();
        lenis.scrollTo(t, { offset: -90 });
      });
    });
  }

  /* ---------- 2. Scroll reveal (IntersectionObserver) ---------- */
  function initReveal() {
    var els = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add('is-in');
        io.unobserve(en.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- 3. Count-up brojači ---------- */
  function initCounters() {
    var nodes = document.querySelectorAll('[data-count]');
    if (!nodes.length) return;

    function fmt(n, node) {
      var s = Math.round(n).toLocaleString('sr-RS');
      return (node.dataset.prefix || '') + s + (node.dataset.suffix || '');
    }
    function run(node) {
      var target = parseFloat(node.dataset.count);
      var dur = 1600, t0 = null;
      function step(t) {
        if (t0 === null) t0 = t;
        var p = Math.min((t - t0) / dur, 1);
        var e = 1 - Math.pow(1 - p, 3);
        node.textContent = fmt(target * e, node);
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    if (!('IntersectionObserver' in window)) { nodes.forEach(run); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        run(en.target);
        io.unobserve(en.target);
      });
    }, { threshold: 0.5 });
    nodes.forEach(function (n) { io.observe(n); });
  }

  /* ---------- 4. Akordeon (kurikulum + FAQ) ---------- */
  function initAccordions() {
    document.querySelectorAll('.acc').forEach(function (acc) {
      var single = acc.dataset.single === 'true';
      acc.querySelectorAll('.acc__btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var item = btn.closest('.acc__item');
          var open = item.classList.contains('is-open');
          if (single) {
            acc.querySelectorAll('.acc__item').forEach(function (i) {
              i.classList.remove('is-open');
              i.querySelector('.acc__btn').setAttribute('aria-expanded', 'false');
            });
          }
          item.classList.toggle('is-open', !open);
          btn.setAttribute('aria-expanded', String(!open));
        });
      });
    });
  }

  /* ---------- 5. Vimeo lazy facade ----------
     NAPOMENA: testimonijali su na Vimeo-u ograničeni na domen my-cer.com
     ("Where can this be embedded → Specific domains"). Van tog domena player
     vraća "Because of its privacy settings, this video cannot be played here."
     Zato van produkcije prikazujemo fallback link. U produkciji se ne vidi.  */
  var ALLOWED_HOSTS = ['my-cer.com', 'www.my-cer.com'];

  function initVideos() {
    var onLiveDomain = ALLOWED_HOSTS.indexOf(location.hostname) !== -1;

    document.querySelectorAll('[data-vimeo]').forEach(function (box) {
      box.addEventListener('click', function () {
        if (box.dataset.loaded) return;
        box.dataset.loaded = '1';

        var id = box.dataset.vimeo;
        var h = box.dataset.hash;
        var src = 'https://player.vimeo.com/video/' + id +
          (h ? '?h=' + h + '&autoplay=1' : '?autoplay=1');

        var fr = document.createElement('iframe');
        fr.src = src;
        fr.allow = 'autoplay; fullscreen; picture-in-picture';
        fr.title = box.dataset.title || 'MyCER video';
        box.appendChild(fr);

        // Van my-cer.com embed je blokiran — ponudi direktan link umesto praznog playera.
        if (onLiveDomain || !h) return;
        setTimeout(function () {
          if (box.querySelector('.vfallback')) return;
          var a = document.createElement('a');
          a.className = 'vfallback';
          a.href = 'https://vimeo.com/' + id + '/' + h;
          a.target = '_blank';
          a.rel = 'noopener';
          a.textContent = 'Embed je zaključan na my-cer.com — otvori na Vimeo-u ↗';
          a.addEventListener('click', function (e) { e.stopPropagation(); });
          box.appendChild(a);
        }, 1500);
      });
    });
  }

  /* ---------- 6. Countdown ---------- */
  function initCountdown() {
    var boxes = document.querySelectorAll('[data-countdown]');
    if (!boxes.length) return;

    // Rolling 10-dnevni prozor — isto ponašanje kao postojeći tajmer na sajtu.
    var KEY = 'mycer_offer_deadline';
    var end;
    try { end = parseInt(localStorage.getItem(KEY), 10); } catch (e) { end = NaN; }
    if (!end || isNaN(end) || end < Date.now()) {
      end = Date.now() + 10 * 24 * 60 * 60 * 1000;
      try { localStorage.setItem(KEY, String(end)); } catch (e) {}
    }

    function pad(n) { return n < 10 ? '0' + n : String(n); }
    function tick() {
      var d = Math.max(end - Date.now(), 0);
      var days = Math.floor(d / 86400000);
      var hrs = Math.floor(d / 3600000) % 24;
      var min = Math.floor(d / 60000) % 60;
      var sec = Math.floor(d / 1000) % 60;
      boxes.forEach(function (b) {
        var set = function (k, v) {
          var el = b.querySelector('[data-unit="' + k + '"]');
          if (el) el.textContent = pad(v);
        };
        set('d', days); set('h', hrs); set('m', min); set('s', sec);
      });
    }
    tick();
    setInterval(tick, 1000);
  }

  /* ---------- 7. Mobilni meni ---------- */
  function initNav() {
    var nav = document.querySelector('.nav');
    var burger = document.querySelector('.burger');
    if (!nav || !burger) return;
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.nav__mobile a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('is-open'); });
    });
  }

  /* ---------- 8. Marquee: dupliraj sadržaj za beskonačnu petlju ---------- */
  function initMarquees() {
    document.querySelectorAll('[data-marquee]').forEach(function (track) {
      track.innerHTML += track.innerHTML;
    });
  }

  /* ---------- boot ---------- */
  function boot() {
    initMarquees();
    initLenis();
    initReveal();
    initCounters();
    initAccordions();
    initVideos();
    initCountdown();
    initNav();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else { boot(); }
})();
