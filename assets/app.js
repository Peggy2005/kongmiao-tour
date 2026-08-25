document.addEventListener("DOMContentLoaded", () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ================= 左下角禮虎小動畫 =================
  const mascotImg = document.getElementById("mascotImg");
  if (mascotImg && !reduceMotion) {
    let frame = 1;
    window.setInterval(() => {
      frame = (frame % 4) + 1;
      mascotImg.src = `assets/mascot/dance-${frame}.png`;
    }, 320);
  }

  function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.classList.add("show");
    window.setTimeout(() => toast.classList.remove("show"), 1600);
  }

  // ================= 入口動畫：磚牆消失 → 廟門開啟 → 窗花拼合 =================
  const intro = document.getElementById("intro");
  const site = document.getElementById("site");
  const introBrick = document.getElementById("introBrick");
  const introDoor = document.getElementById("introDoor");
  const introWindow = document.getElementById("introWindow");
  const introLabel = document.getElementById("introLabel");
  const introSkip = document.getElementById("introSkip");

  function buildBricks() {
    const rows = 7, cols = 8;
    const order = [];
    for (let i = 0; i < rows * cols; i++) order.push(i);
    // 洗牌，讓磚塊消失順序看起來隨機
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    const delayOf = new Array(order.length);
    order.forEach((idx, seq) => (delayOf[idx] = seq * 18));

    const frag = document.createDocumentFragment();
    for (let i = 0; i < rows * cols; i++) {
      const b = document.createElement("div");
      b.className = "brick";
      b.style.transitionDelay = `${delayOf[i]}ms`;
      frag.appendChild(b);
    }
    introBrick.appendChild(frag);
  }

  function buildLattice() {
    const grid = document.createElement("div");
    grid.className = "lattice-grid";
    const cells = 16;
    for (let i = 0; i < cells; i++) {
      const row = Math.floor(i / 4);
      const col = i % 4;
      const piece = document.createElement("div");
      piece.className = "lattice-piece scattered";
      piece.style.top = `${row * 25}%`;
      piece.style.left = `${col * 25}%`;
      const dx = (Math.random() * 2 - 1) * 120;
      const dy = (Math.random() * 2 - 1) * 120;
      const rot = (Math.random() * 2 - 1) * 180;
      piece.style.transform = `translate(${dx}px, ${dy}px) rotate(${rot}deg)`;
      piece.style.transitionDelay = `${i * 35}ms`;
      grid.appendChild(piece);
    }
    introWindow.appendChild(grid);
    return grid;
  }

  function finishIntro() {
    intro.classList.add("fade-out");
    window.setTimeout(() => {
      intro.classList.add("hidden");
      site.classList.remove("hidden");
      growRails();
    }, 700);
    try {
      window.localStorage.setItem("kongmiaoTourIntroSeen", "1");
    } catch (e) {
      /* 私密瀏覽模式下 localStorage 可能無法使用，略過即可 */
    }
  }

  // ================= 兩側雷紋邊框：進站後由上往下慢慢延伸 =================
  const railLeft = document.getElementById("railLeft");
  const railRight = document.getElementById("railRight");
  function growRails() {
    window.setTimeout(() => {
      railLeft.classList.add("grow");
      railRight.classList.add("grow");
    }, 200);
  }

  // ================= 每個段落開頭的雷紋分隔線：捲入視窗時延伸出現 =================
  const dividerObserver = new window.IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          dividerObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
  );
  document.querySelectorAll(".huiwen-divider[data-reveal]").forEach((el) => dividerObserver.observe(el));

  function playIntro() {
    buildBricks();
    const latticeGrid = buildLattice();

    // Phase A：磚塊逐一消失
    window.requestAnimationFrame(() => {
      window.setTimeout(() => {
        Array.from(introBrick.children).forEach((b) => b.classList.add("gone"));
      }, 250);
    });

    // Phase B：廟門開啟 + 標題浮現
    window.setTimeout(() => {
      introDoor.classList.add("open");
      introLabel.classList.add("show");
    }, 1900);

    // Phase C：窗花拼合
    window.setTimeout(() => {
      introWindow.classList.add("show");
      Array.from(latticeGrid.children).forEach((p) => {
        p.classList.remove("scattered");
        p.classList.add("placed");
      });
    }, 2900);

    // 結束，進入主站
    window.setTimeout(finishIntro, 4300);
  }

  introSkip.addEventListener("click", finishIntro);

  let alreadySeen = false;
  try {
    alreadySeen = window.localStorage.getItem("kongmiaoTourIntroSeen") === "1";
  } catch (e) {
    alreadySeen = false;
  }

  if (reduceMotion || alreadySeen) {
    intro.classList.add("hidden");
    site.classList.remove("hidden");
    growRails();
  } else {
    playIntro();
  }

  document.getElementById("replayIntro").addEventListener("click", () => {
    site.classList.add("hidden");
    intro.classList.remove("hidden", "fade-out");
    introBrick.innerHTML = "";
    introWindow.innerHTML = "";
    introWindow.classList.remove("show");
    introDoor.classList.remove("open");
    introLabel.classList.remove("show");
    railLeft.classList.remove("grow");
    railRight.classList.remove("grow");
    window.scrollTo({ top: 0 });
    playIntro();
  });

  // ================= 導覽選單（手機版展開）=================
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );

  // ================= 內容區塊渲染 =================
  const architectureList = document.getElementById("architectureList");
  architectureList.innerHTML = ARCHITECTURE.map(
    (a, i) => `<button type="button" class="card detail-card" data-source="architecture" data-index="${i}">
      <h3>${a.title}</h3>
      <div class="card-sub">${a.subtitle}</div>
      <p>${a.text}</p>
      <span class="card-more">看照片與完整介紹 →</span>
    </button>`
  ).join("");

  const plaqueList = document.getElementById("plaqueList");
  plaqueList.innerHTML = PLAQUES.map(
    (p) => `<div class="plaque-item">
      <div class="plaque-phrase-col">
        <div class="plaque-phrase">${p.phrase}</div>
        <div class="plaque-era">${p.era}</div>
        <div class="plaque-bestower">${p.bestower}　御筆</div>
      </div>
      <div>
        <p class="plaque-story">${p.story}</p>
        <p class="plaque-meaning">${p.meaning}</p>
      </div>
    </div>`
  ).join("");
  document.getElementById("plaqueEpilogue").textContent = PLAQUE_EPILOGUE;

  const contextList = document.getElementById("contextList");
  contextList.innerHTML = LOCAL_CONTEXT.map(
    (c) => `<div class="timeline-item">
      <h3>${c.title}</h3>
      <p>${c.text}</p>
    </div>`
  ).join("");

  const routeList = document.getElementById("routeList");
  routeList.innerHTML = ROUTE_STEPS.map(
    (r) => `<li>
      <div>
        <h3>${r.title}</h3>
        <p>${r.note}</p>
      </div>
    </li>`
  ).join("");

  const nearbyList = document.getElementById("nearbyList");
  nearbyList.innerHTML = NEARBY.map(
    (n, i) => `<button type="button" class="card detail-card" data-source="nearby" data-index="${i}">
      <span class="card-walk">${n.walk}</span>
      <h3>${n.title}</h3>
      <p>${n.text}</p>
      <span class="card-more">看照片與完整介紹 →</span>
    </button>`
  ).join("");

  const plantsList = document.getElementById("plantsList");
  plantsList.innerHTML = PLANTS.map(
    (p, i) => `<button type="button" class="card detail-card" data-source="plants" data-index="${i}">
      <h3>${p.title}</h3>
      <div class="card-latin">${p.latin}</div>
      <p>${p.text}</p>
      <span class="card-more">看照片與完整介紹 →</span>
    </button>`
  ).join("");

  // ---- 詳細內容彈窗（建築特色／周邊景點／園區植物共用）：
  //      照片和完整文字放在一起顯示，卡片內文只放短介紹＋「看照片與完整介紹」入口 ----
  const DETAIL_SOURCES = { architecture: ARCHITECTURE, nearby: NEARBY, plants: PLANTS };
  // 只有植物用的是「該物種代表照」，不是孔廟現場實拍，要額外註明；
  // 建築特色與周邊景點的照片都是孔廟／周邊景點現場實拍，不需要這行但示。
  const REPRESENTATIVE_SOURCES = new Set(["plants"]);

  const detailModal = document.getElementById("detailModal");
  const detailModalBackdrop = document.getElementById("detailModalBackdrop");
  const detailModalClose = document.getElementById("detailModalClose");
  const detailModalImg = document.getElementById("detailModalImg");
  const detailModalCredit = document.getElementById("detailModalCredit");
  const detailModalTitle = document.getElementById("detailModalTitle");
  const detailModalLatin = document.getElementById("detailModalLatin");
  const detailModalDetail = document.getElementById("detailModalDetail");

  function openDetailModal(item, sourceKey) {
    detailModalImg.src = item.image;
    detailModalImg.alt = item.imageAlt;
    const suffix = REPRESENTATIVE_SOURCES.has(sourceKey) ? "　·　示意圖，非孔廟現場實際拍攝" : "";
    detailModalCredit.innerHTML = `圖片來源：Wikimedia Commons．${escapeHtml(
      item.credit
    )}（${escapeHtml(item.license)}）－<a href="${item.sourceUrl}" target="_blank" rel="noopener">原始檔案</a>${suffix}`;
    detailModalTitle.textContent = item.title;
    if (item.latin) {
      detailModalLatin.textContent = item.latin;
      detailModalLatin.classList.remove("hidden");
    } else {
      detailModalLatin.classList.add("hidden");
    }
    detailModalDetail.textContent = item.detail;
    detailModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
  function closeDetailModal() {
    detailModal.classList.add("hidden");
    document.body.style.overflow = "";
  }
  document.querySelectorAll("#architectureList, #nearbyList, #plantsList").forEach((list) => {
    list.addEventListener("click", (e) => {
      const btn = e.target.closest(".detail-card");
      if (!btn) return;
      const sourceKey = btn.dataset.source;
      const item = DETAIL_SOURCES[sourceKey][Number(btn.dataset.index)];
      openDetailModal(item, sourceKey);
    });
  });
  detailModalBackdrop.addEventListener("click", closeDetailModal);
  detailModalClose.addEventListener("click", closeDetailModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !detailModal.classList.contains("hidden")) closeDetailModal();
  });

  // ================= 抽籤互動：籤筒，點一下或搖一搖手機 =================
  const qiantongBtn = document.getElementById("qiantongBtn");
  const motionEnableBtn = document.getElementById("motionEnableBtn");
  const drawIdle = document.getElementById("drawIdle");
  const drawResult = document.getElementById("drawResult");
  let currentFortune = null;
  let armed = true; // 目前是否可以觸發下一次抽籤（畫面在待抽籤狀態）

  function renderFortune() {
    currentFortune = drawFortune();
    document.getElementById("resultStars").textContent =
      "★".repeat(currentFortune.stars) + "☆".repeat(5 - currentFortune.stars);
    document.getElementById("resultTitle").textContent = currentFortune.title;
    document.getElementById("resultText").textContent = currentFortune.text;
    document.getElementById("saveBtn").textContent = "保存此籤詩";
    document.getElementById("saveBtn").disabled = false;
  }

  function doDraw() {
    if (!armed) return;
    armed = false;
    qiantongBtn.disabled = true;
    qiantongBtn.classList.add("shaking");
    window.setTimeout(() => qiantongBtn.classList.add("dropped"), 380);
    window.setTimeout(() => {
      renderFortune();
      drawIdle.classList.add("hidden");
      drawResult.classList.remove("hidden");
    }, 1300);
  }

  qiantongBtn.addEventListener("click", doDraw);

  document.getElementById("redrawBtn").addEventListener("click", () => {
    drawResult.classList.add("hidden");
    drawIdle.classList.remove("hidden");
    qiantongBtn.disabled = false;
    qiantongBtn.classList.remove("shaking", "dropped");
    armed = true;
  });

  document.getElementById("saveBtn").addEventListener("click", (e) => {
    if (currentFortune) saveFortuneAsImage(currentFortune, e.currentTarget);
  });

  // ---- 搖一搖偵測：iOS 需要使用者手動觸發授權，Android／其他瀏覽器可直接監聽 ----
  let motionArmed = false;
  let lastShakeAt = 0;
  function handleMotion(e) {
    if (!armed) return;
    const a = e.accelerationIncludingGravity || e.acceleration;
    if (!a) return;
    const magnitude = Math.abs(a.x || 0) + Math.abs(a.y || 0) + Math.abs(a.z || 0);
    const now = Date.now();
    if (magnitude > 38 && now - lastShakeAt > 1200) {
      lastShakeAt = now;
      doDraw();
    }
  }
  function armMotion() {
    if (motionArmed) return;
    motionArmed = true;
    window.addEventListener("devicemotion", handleMotion);
  }

  if (typeof window.DeviceMotionEvent !== "undefined" && typeof window.DeviceMotionEvent.requestPermission === "function") {
    // iOS 13+：需要使用者主動點按才能請求動作感應權限
    motionEnableBtn.classList.remove("hidden");
    motionEnableBtn.addEventListener("click", async () => {
      try {
        const result = await window.DeviceMotionEvent.requestPermission();
        if (result === "granted") {
          armMotion();
          motionEnableBtn.classList.add("hidden");
          showToast("搖一搖偵測已開啟，搖動手機試試看");
        } else {
          showToast("沒有開啟動作感應也沒關係，點籤筒一樣能抽籤");
        }
      } catch (err) {
        showToast("這台裝置無法開啟搖一搖，改點籤筒抽籤即可");
      }
    });
  } else if (window.DeviceMotionEvent) {
    // Android／其他瀏覽器：不需額外授權，直接監聽
    armMotion();
  }

  function saveFortuneAsImage(fortune, btn) {
    const w = 750, h = 1000;
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#f4ede2";
    ctx.fillRect(0, 0, w, h);
    ctx.textAlign = "center";

    ctx.fillStyle = "#6b6058";
    ctx.font = "24px 'Noto Serif TC', serif";
    ctx.fillText("走進孔廟．今日籤詩", w / 2, 140);

    ctx.fillStyle = "#a9812f";
    ctx.font = "44px 'Noto Serif TC', serif";
    ctx.fillText("★".repeat(fortune.stars) + "☆".repeat(5 - fortune.stars), w / 2, 240);

    ctx.fillStyle = "#8c3324";
    ctx.font = "bold 64px 'Noto Serif TC', serif";
    ctx.fillText(fortune.title, w / 2, 340);

    ctx.strokeStyle = "#ddd1bd";
    ctx.beginPath();
    ctx.moveTo(w / 2 - 120, 390);
    ctx.lineTo(w / 2 + 120, 390);
    ctx.stroke();

    ctx.fillStyle = "#2b211b";
    ctx.font = "28px 'Noto Serif TC', serif";
    wrapText(ctx, fortune.text, w / 2, 470, 580, 46);

    ctx.fillStyle = "#6b6058";
    ctx.font = "20px 'Noto Serif TC', serif";
    ctx.fillText(todayStr().replace(/-/g, " / "), w / 2, h - 140);
    ctx.fillText("臺南孔廟．全臺首學", w / 2, h - 100);

    canvas.toBlob(async (blob) => {
      const file = new File([blob], `孔廟籤詩-${fortune.title}.png`, { type: "image/png" });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({ files: [file], title: "走進孔廟．今日籤詩" });
          showToast("已開啟分享／儲存");
          btn.textContent = "已保存";
          btn.disabled = true;
          return;
        } catch (err) {
          /* 使用者取消分享，改為下載 */
        }
      }
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast("圖片已下載");
      btn.textContent = "已保存";
      btn.disabled = true;
    }, "image/png");
  }

  function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    let line = "";
    let curY = y;
    for (const ch of text) {
      const test = line + ch;
      if (ctx.measureText(test).width > maxWidth && line !== "") {
        ctx.fillText(line, x, curY);
        line = ch;
        curY += lineHeight;
      } else {
        line = test;
      }
    }
    if (line) ctx.fillText(line, x, curY);
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  // ================= 許願牆：彈幕式共用牆（Cloudflare Worker + D1，全部遊客共用）=================
  const wishInput = document.getElementById("wishInput");
  const wishHangBtn = document.getElementById("wishHangBtn");
  const wishCount = document.getElementById("wishCount");
  const wishDanmaku = document.getElementById("wishDanmaku");
  const wishDanmakuEmpty = document.getElementById("wishDanmakuEmpty");
  const WISH_MAX_CHARS = 100;
  const WISH_TONES = ["tone-gold", "tone-brick", "tone-cream"];
  const shownWishIds = new Set();
  let wishSubmitting = false;

  function updateWishCount() {
    const len = Array.from(wishInput.value).length;
    wishCount.textContent = `${len}/${WISH_MAX_CHARS}`;
  }
  wishInput.addEventListener("input", updateWishCount);
  updateWishCount();

  function hashCode(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
      h = (h << 5) - h + str.charCodeAt(i);
      h |= 0;
    }
    return Math.abs(h);
  }

  function spawnWishNote(wish) {
    const id = String(wish.id);
    if (shownWishIds.has(id)) return;
    shownWishIds.add(id);
    wishDanmakuEmpty.classList.add("hidden");

    const note = document.createElement("div");
    const tone = WISH_TONES[hashCode(id) % WISH_TONES.length];
    note.className = `wish-note ${tone}`;
    note.dataset.id = id;
    note.textContent = wish.text;

    const laneCount = 4;
    const lane = Math.floor(Math.random() * laneCount);
    note.style.top = `calc(${(lane * 100) / laneCount}% + ${6 + Math.random() * 10}px)`;

    const duration = 13 + Math.random() * 9; // 13-22 秒飄完一趟
    const delay = -Math.random() * duration; // 負的 delay：一開始就有牌飄在畫面各處，不用等
    note.style.animationDuration = `${duration.toFixed(2)}s`;
    note.style.animationDelay = `${delay.toFixed(2)}s`;
    note.style.setProperty("--wish-rot", `${(Math.random() * 6 - 3).toFixed(1)}deg`);

    const containerWidth = wishDanmaku.clientWidth || 320;
    note.style.setProperty("--wish-start", `${containerWidth}px`);
    note.style.setProperty("--wish-end", "-360px");

    wishDanmaku.appendChild(note);
  }

  function syncWishWall(wishes) {
    const idsFromServer = new Set(wishes.map((w) => String(w.id)));
    // 伺服器只留最新 50 則，被擠掉的舊願望也要跟著從牆上移除
    wishDanmaku.querySelectorAll(".wish-note").forEach((el) => {
      if (!idsFromServer.has(el.dataset.id)) {
        shownWishIds.delete(el.dataset.id);
        el.remove();
      }
    });
    wishes.forEach(spawnWishNote);
    wishDanmakuEmpty.classList.toggle("hidden", wishes.length > 0);
  }

  async function fetchWishes() {
    try {
      const res = await fetch(WISH_API, { cache: "no-store" });
      if (!res.ok) return;
      const data = await res.json();
      syncWishWall(data.wishes || []);
    } catch (e) {
      /* 連不上許願牆 API 時，牆上維持現有內容，不特別打擾使用者 */
    }
  }

  async function submitWish() {
    const text = wishInput.value.trim();
    if (!text) {
      showToast("先寫下你的願望吧");
      return;
    }
    if (Array.from(text).length > WISH_MAX_CHARS) {
      showToast(`願望有點長，${WISH_MAX_CHARS} 字以內比較容易被看到`);
      return;
    }
    if (wishSubmitting) return;
    wishSubmitting = true;
    wishHangBtn.disabled = true;
    try {
      const res = await fetch(WISH_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (res.status === 429) {
        showToast("你剛剛才貼過一則，等一下下再貼下一個願望");
      } else if (!res.ok) {
        showToast("願望暫時送不出去，等一下再試試看");
      } else {
        wishInput.value = "";
        updateWishCount();
        showToast("願望已掛上許願牆");
        fetchWishes();
      }
    } catch (e) {
      showToast("網路好像不太穩，願望暫時送不出去");
    } finally {
      wishSubmitting = false;
      wishHangBtn.disabled = false;
    }
  }

  wishHangBtn.addEventListener("click", submitWish);
  wishInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) submitWish();
  });

  fetchWishes();
  window.setInterval(fetchWishes, 20000);
});
