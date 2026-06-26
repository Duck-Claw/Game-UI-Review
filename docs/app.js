/* game-ui-review — reveal on scroll, gauge fills, number count-up */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // stagger index for capability cards
  document.querySelectorAll(".capability-grid article").forEach(function (el, i) {
    el.style.setProperty("--i", i);
  });

  function countUp(el) {
    var to = parseInt(el.getAttribute("data-to"), 10) || 0;
    if (reduce) { el.textContent = to; return; }
    var start = null,
      dur = 1100;
    function tick(t) {
      if (start === null) start = t;
      var p = Math.min((t - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * to);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
    document.querySelectorAll(".meter").forEach(function (el) {
      el.classList.add("run");
      var n = el.querySelector(".m-num");
      if (n) n.textContent = n.getAttribute("data-to");
    });
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        el.classList.add("in");

        // if scorecard, run meters
        if (el.classList.contains("score-card")) {
          el.querySelectorAll(".meter").forEach(function (m, i) {
            setTimeout(function () {
              m.classList.add("run");
              var num = m.querySelector(".m-num");
              if (num) countUp(num);
            }, i * 90);
          });
        }
        io.unobserve(el);
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
  );

  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
})();
