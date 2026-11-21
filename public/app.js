(() => {
  "use strict";
  const root = document.documentElement;
  root.classList.add("js");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const wait = (ms) => new Promise((r) => window.setTimeout(r, ms));

  /* ---------- headline: words rise in one by one ---------- */
  const title = $("[data-split]");
  if (title && !reduce) {
    let n = 0;
    const makeWord = (text, grad) => {
      const w = document.createElement("span");
      w.className = grad ? "word grad" : "word";
      w.textContent = text;
      w.style.animationDelay = `${0.15 + n * 0.07}s`;
      n += 1;
      return w;
    };
    const frag = document.createDocumentFragment();
    [...title.childNodes].forEach((node) => {
      const isGrad = node.nodeType === 1 && node.classList.contains("grad");
      const text = node.textContent;
      text.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) frag.appendChild(document.createTextNode(" "));
        else frag.appendChild(makeWord(part, isGrad));
      });
    });
    title.replaceChildren(frag);
    title.classList.add("is-split");
  }

  /* ---------- reveal on scroll (fires a little before the element arrives) ---------- */
  const revealEls = $$("[data-reveal]");
  const siblingIndex = new Map();
  revealEls.forEach((el) => {
    const key = el.parentElement;
    const i = siblingIndex.get(key) || 0;
    siblingIndex.set(key, i + 1);
    el.style.transitionDelay = `${Math.min(i, 3) * 60}ms`;
  });
  const revealIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      revealIO.unobserve(e.target);
    });
  }, { rootMargin: "0px 0px 12% 0px", threshold: 0 });
  revealEls.forEach((el) => revealIO.observe(el));

  /* ---------- pause looping animations in sections that are off screen ---------- */
  const offIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => e.target.classList.toggle("is-off", !e.isIntersecting));
  }, { rootMargin: "120px 0px" });
  $$(".hero, .marquee, .stats, .section, .cta, .foot").forEach((s) => offIO.observe(s));

  /* ---------- one scroll loop: progress bar, nav, scrollspy, process line ---------- */
  const nav = $("#nav");
  const bar = $(".progress span");
  const pill = $(".nav__pill");
  const links = $$(".nav__links a");
  const sections = links.map((a) => $(a.getAttribute("href")));
  const steps = $("#steps");
  const stepItems = steps ? $$(".step", steps) : [];
  let ticking = false;

  function onScrollFrame() {
    ticking = false;
    const y = window.scrollY;
    const vh = window.innerHeight;
    const max = document.documentElement.scrollHeight - vh;
    bar.style.setProperty("--p", max > 0 ? (y / max).toFixed(4) : "0");
    nav.classList.toggle("is-scrolled", y > 24);

    let active = -1;
    sections.forEach((s, i) => { if (s && s.getBoundingClientRect().top < vh * 0.45) active = i; });
    links.forEach((a, i) => a.classList.toggle("is-active", i === active));
    if (active >= 0) {
      const a = links[active];
      pill.style.setProperty("--l", `${a.offsetLeft}px`);
      pill.style.setProperty("--w", `${a.offsetWidth}px`);
      pill.style.setProperty("--o", "1");
    } else {
      pill.style.setProperty("--o", "0");
    }

    if (steps) {
      const r = steps.getBoundingClientRect();
      const p = reduce ? 1 : Math.min(Math.max((vh * 0.85 - r.top) / (vh * 0.5), 0), 1);
      steps.style.setProperty("--line-p", p.toFixed(3));
      stepItems.forEach((s, i) => s.classList.toggle("lit", p >= (i + 0.2) / stepItems.length));
    }
  }
  const requestScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(onScrollFrame); } };
  window.addEventListener("scroll", requestScroll, { passive: true });
  window.addEventListener("resize", requestScroll);
  onScrollFrame();

  /* ---------- pointer: spotlight, phone tilt, card glow, magnetic buttons ---------- */
  if (finePointer && !reduce) {
    const spot = $(".spot");
    const stage = $("#stage");
    const phone = $("#phone");
    let px = 0, py = 0, pending = false;
    window.addEventListener("pointermove", (ev) => {
      px = ev.clientX; py = ev.clientY;
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        pending = false;
        spot.style.setProperty("--mx", `${px}px`);
        spot.style.setProperty("--my", `${py}px`);
        if (stage && phone) {
          const r = stage.getBoundingClientRect();
          if (r.bottom > 0 && r.top < window.innerHeight) {
            const dx = (px - (r.left + r.width / 2)) / (window.innerWidth / 2);
            const dy = (py - (r.top + r.height / 2)) / (window.innerHeight / 2);
            phone.style.setProperty("--ry", `${(dx * 12).toFixed(2)}deg`);
            phone.style.setProperty("--rx", `${(-dy * 8).toFixed(2)}deg`);
          }
        }
      });
    }, { passive: true });

    $$(".card").forEach((card) => {
      card.addEventListener("pointermove", (ev) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--x", `${ev.clientX - r.left}px`);
        card.style.setProperty("--y", `${ev.clientY - r.top}px`);
      });
    });

    $$(".tilt").forEach((box) => {
      const ui = $(".ui", box);
      box.addEventListener("pointermove", (ev) => {
        const r = box.getBoundingClientRect();
        const dx = (ev.clientX - r.left) / r.width - 0.5;
        const dy = (ev.clientY - r.top) / r.height - 0.5;
        ui.style.setProperty("--ry", `${(dx * 10).toFixed(2)}deg`);
        ui.style.setProperty("--rx", `${(-dy * 8).toFixed(2)}deg`);
      });
      box.addEventListener("pointerleave", () => { ui.style.setProperty("--ry", "0deg"); ui.style.setProperty("--rx", "0deg"); });
    });

    $$(".magnetic").forEach((el) => {
      el.addEventListener("pointermove", (ev) => {
        const r = el.getBoundingClientRect();
        const dx = (ev.clientX - (r.left + r.width / 2)) * 0.22;
        const dy = (ev.clientY - (r.top + r.height / 2)) * 0.3;
        el.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
      });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    });
  }

  /* ---------- count-ups ---------- */
  function countUp(el, to, from = 0, dur = 1400) {
    if (reduce) { el.textContent = String(to); return; }
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      el.textContent = String(Math.round(from + (to - from) * (1 - Math.pow(1 - p, 4))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      countIO.unobserve(e.target);
      countUp(e.target, Number(e.target.dataset.to), Number(e.target.dataset.from || 0));
    });
  }, { threshold: 0.6 });
  $$(".count").forEach((c) => countIO.observe(c));

  /* ---------- work visuals play when they come into view ---------- */
  const playIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      playIO.unobserve(e.target);
      e.target.classList.add("play");
      const c = $(".count-ui", e.target);
      if (c) countUp(c, Number(c.dataset.to), 0, 2000);
    });
  }, { threshold: 0.35 });
  $$(".play-target").forEach((el) => playIO.observe(el));

  /* ---------- the mini chat in the big service card loops while visible ---------- */
  const mini = $("#mini");
  if (mini && !reduce) {
    const parts = $$("span", mini);
    let visible = false;
    let looping = false;
    mini.classList.add("is-playing");
    async function loop() {
      if (looping) return;
      looping = true;
      while (visible) {
        for (const p of parts) {
          if (!visible) break;
          p.classList.add("on");
          await wait(p.classList.contains("mini__time") ? 400 : 900);
        }
        await wait(3200);
        parts.forEach((p) => p.classList.remove("on"));
        await wait(600);
      }
      looping = false;
    }
    new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      if (visible) loop();
    }, { threshold: 0.3 }).observe(mini);
  }

  /* ---------- copy email with a toast ---------- */
  const toast = $("#toast");
  let toastTimer = 0;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2200);
  }
  const copy = $("#copy");
  if (copy) {
    copy.addEventListener("click", async () => {
      const email = copy.dataset.email;
      try { await navigator.clipboard.writeText(email); showToast("✓ Email copied: " + email); }
      catch { showToast(email); }
    });
  }

  /* ---------- the AI assistant demo in the hero phone ---------- */
  const talk = {
    en: {
      qa: [
        ["Got pandan cake today?", "Yes! Fresh pandan chiffon, RM 28 for a whole cake. Shall I keep one for you?"],
        ["Can you deliver tomorrow?", "Sure! Delivery tomorrow between 10am and 6pm is RM 8. What's your address?"],
        ["2 boxes of kuih for Saturday", "Done! 2 boxes of mixed kuih for Saturday, RM 36. I've sent your order to the shop 🎉"],
      ],
      order: ["New order", "Saturday · 2 × mixed kuih box", "Total RM 36.00"],
      again: "↺ Start over", typing: "typing…", online: "AI assistant", today: "Today",
    },
    zh: {
      qa: [
        ["今天有班兰蛋糕吗？", "有的！新鲜班兰戚风蛋糕，一个 RM 28。要帮你留一个吗？"],
        ["明天可以送货吗？", "可以！明天早上10点到傍晚6点送货，运费 RM 8。请问地址是？"],
        ["星期六要两盒娘惹糕", "好的！星期六两盒综合娘惹糕，共 RM 36。订单已经交给店家了 🎉"],
      ],
      order: ["新订单", "星期六 · 综合娘惹糕 × 2 盒", "合计 RM 36.00"],
      again: "↺ 重新开始", typing: "正在输入…", online: "AI 助手", today: "今天",
    },
    ms: {
      qa: [
        ["Ada kek pandan hari ini?", "Ada! Kek pandan chiffon segar, RM 28 sebiji. Nak saya simpan satu?"],
        ["Boleh hantar esok?", "Boleh! Penghantaran esok antara 10 pagi hingga 6 petang, RM 8. Alamat di mana?"],
        ["2 kotak kuih untuk Sabtu", "Siap! 2 kotak kuih campur untuk Sabtu, RM 36. Pesanan dah dihantar kepada kedai 🎉"],
      ],
      order: ["Pesanan baru", "Sabtu · 2 × kotak kuih campur", "Jumlah RM 36.00"],
      again: "↺ Mula semula", typing: "menaip…", online: "Pembantu AI", today: "Hari ini",
    },
  };

  const chat = $("#chat");
  const asks = $("#asks");
  const stage = $("#stage");
  const presence = $("#presence");
  const presenceText = presence ? $(".presence__text", presence) : null;
  const langButtons = $$(".lang");
  if (!chat || !asks) return;

  let lang = "en";
  let asked = new Set([0]);
  let busy = false;
  let run = 0;
  let autoplay = !reduce;
  let minute = 41;

  const scrollChat = () => chat.scrollTo({ top: chat.scrollHeight, behavior: reduce ? "auto" : "smooth" });
  const clock = () => `9:${String(minute).padStart(2, "0")}`;
  const showFloat = (name) => { const f = $(`[data-float="${name}"]`); if (f) f.classList.add("show"); };

  function setTyping(on) {
    if (!presence) return;
    presence.classList.toggle("is-typing", on);
    presenceText.textContent = on ? talk[lang].typing : talk[lang].online;
  }

  function bubble(text, who, animate = true) {
    const li = document.createElement("li");
    li.className = `msg msg--${who}` + (animate ? " pop" : "");
    li.append(text);
    const meta = document.createElement("span");
    meta.className = "meta";
    meta.textContent = clock();
    if (who === "in") {
      const ticks = document.createElement("span");
      ticks.className = "ticks";
      ticks.textContent = " ✓✓";
      meta.appendChild(ticks);
      li.dataset.ticks = "1";
    }
    li.appendChild(meta);
    chat.appendChild(li);
    scrollChat();
    return li;
  }

  function typingBubble() {
    const li = document.createElement("li");
    li.className = "msg msg--out typing pop";
    li.setAttribute("aria-label", talk[lang].typing);
    for (let k = 0; k < 3; k++) li.appendChild(document.createElement("i"));
    chat.appendChild(li);
    scrollChat();
    return li;
  }

  function confetti(anchor) {
    if (reduce || !stage) return;
    const s = stage.getBoundingClientRect();
    const a = anchor.getBoundingClientRect();
    const cx = a.left + a.width / 2 - s.left;
    const cy = a.top + a.height / 2 - s.top;
    const colors = ["#c4b5fd", "#67e8f9", "#f9a8d4", "#86efac", "#fde68a"];
    for (let i = 0; i < 26; i++) {
      const c = document.createElement("i");
      c.className = "confetti";
      c.style.left = `${cx}px`;
      c.style.top = `${cy}px`;
      c.style.background = colors[i % colors.length];
      const ang = Math.random() * Math.PI * 2;
      const dist = 70 + Math.random() * 120;
      c.style.setProperty("--tx", `${Math.cos(ang) * dist}px`);
      c.style.setProperty("--ty", `${Math.sin(ang) * dist - 40}px`);
      c.style.setProperty("--r", `${Math.random() * 540 - 270}deg`);
      c.style.animationDelay = `${Math.random() * 0.08}s`;
      stage.appendChild(c);
      window.setTimeout(() => c.remove(), 1400);
    }
  }

  function orderCard() {
    const [titleText, line, total] = talk[lang].order;
    const li = document.createElement("li");
    li.className = "order pop";
    const b = document.createElement("b");
    b.textContent = `✓ ${titleText}`;
    li.append(b, line, document.createElement("br"), total);
    chat.appendChild(li);
    scrollChat();
    window.setTimeout(() => confetti(li), 120);
    showFloat("order");
  }

  function renderAsks() {
    asks.replaceChildren();
    const t = talk[lang];
    t.qa.forEach(([q], i) => {
      if (asked.has(i)) return;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "ask";
      btn.textContent = q;
      btn.disabled = busy;
      btn.addEventListener("click", () => { autoplay = false; ask(i); });
      asks.appendChild(btn);
    });
    if (asked.size === t.qa.length && !busy) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "ask";
      btn.textContent = t.again;
      btn.addEventListener("click", () => { autoplay = false; reset(lang); });
      asks.appendChild(btn);
    }
  }

  async function ask(i) {
    if (busy) return;
    busy = true;
    const myRun = run;
    asked.add(i);
    minute += 1;
    const [q, a] = talk[lang].qa[i];
    const mine = bubble(q, "in");
    renderAsks();
    if (i === 2) showFloat("lead");
    await wait(reduce ? 50 : 500);
    if (myRun !== run) return;
    const ticks = $(".ticks", mine);
    if (ticks) ticks.classList.add("is-read");
    setTyping(true);
    const typing = typingBubble();
    await wait(reduce ? 100 : 1300);
    if (myRun !== run) return;
    typing.remove();
    setTyping(false);
    bubble(a, "out");
    showFloat("reply");
    if (i === 2) { await wait(reduce ? 0 : 350); if (myRun === run) orderCard(); }
    busy = false;
    renderAsks();
  }

  function reset(next) {
    run += 1;
    lang = next;
    asked = new Set([0]);
    busy = false;
    minute = 41;
    chat.replaceChildren();
    const day = document.createElement("li");
    day.className = "day";
    day.setAttribute("aria-hidden", "true");
    day.textContent = talk[lang].today;
    chat.appendChild(day);
    const [q, a] = talk[lang].qa[0];
    const first = bubble(q, "in", false);
    const t = $(".ticks", first);
    if (t) t.classList.add("is-read");
    bubble(a, "out", false);
    setTyping(false);
    langButtons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    const code = lang === "zh" ? "zh-Hans" : lang;
    chat.lang = code;
    asks.lang = code;
    renderAsks();
  }

  langButtons.forEach((b) => b.addEventListener("click", () => { autoplay = false; reset(b.dataset.lang); }));
  renderAsks();
  if (reduce) ["reply", "lead", "order"].forEach(showFloat);

  // Play the whole conversation once when the phone is on screen.
  const phoneIO = new IntersectionObserver(async (entries) => {
    if (!entries.some((e) => e.isIntersecting)) return;
    phoneIO.disconnect();
    if (!autoplay) return;
    await wait(1600);
    if (autoplay) await ask(1);
    await wait(1400);
    if (autoplay) await ask(2);
  }, { threshold: 0.5 });
  phoneIO.observe(chat);
})();
