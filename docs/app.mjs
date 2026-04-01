/*
 * Derived in part from apmnnn/mhxx-rng.
 * Original work Copyright (c) 2026 apmnnn, licensed under MIT.
 * HTML/JavaScript adaptation and additions Copyright (c) 2026 einst alfimi,
 * licensed under MIT. See ../LICENSE.
 */
import {
  getKindConfig,
  getSkillOptions,
  getKindLabels,
  getOriginLabels,
  getPointOptions,
  buildQueryFromIndexes,
  describeCharm,
} from "./core.mjs";

const localeSelect = document.querySelector("#localeSelect");
const kindSelect = document.querySelector("#kindSelect");
const originSelect = document.querySelector("#originSelect");
const skill1Select = document.querySelector("#skill1Select");
const sp1Select = document.querySelector("#sp1Select");
const skill2Select = document.querySelector("#skill2Select");
const sp2Select = document.querySelector("#sp2Select");
const slotSelect = document.querySelector("#slotSelect");
const limitInput = document.querySelector("#limitInput");
const aroundFrameInput = document.querySelector("#aroundFrameInput");
const aroundRadiusInput = document.querySelector("#aroundRadiusInput");

const searchStatus = document.querySelector("#searchStatus");
const searchOutput = document.querySelector("#searchOutput");
const aroundOutput = document.querySelector("#aroundOutput");

const searchBtn = document.querySelector("#searchBtn");
const searchGreaterBtn = document.querySelector("#searchGreaterBtn");
const cancelJobBtn = document.querySelector("#cancelJobBtn");
const aroundBtn = document.querySelector("#aroundBtn");
const presetCrisisBtn = document.querySelector("#presetCrisisBtn");
const presetChainCritBtn = document.querySelector("#presetChainCritBtn");

let activeWorker = null;
let activeJobType = null;
let lastSearchResults = null;
let lastAroundRows = null;

const UI_TEXT = {
  ja: {
    pageTitle: "MHXX RNG 最小 Web 版",
    pageIntro: "まずは `search`、`search_greater`、`around` 相当をブラウザで使えるようにした版です。元 notebook の重い高速探索や特殊機能まではまだ載せていません。",
    searchSectionTitle: "お守り検索",
    aroundSectionTitle: "前後表示",
    localeLabel: "言語",
    kindLabel: "お守り種",
    originLabel: "原産地",
    limitLabel: "検索回数",
    skill1Label: "第1スキル",
    sp1Label: "第1SP",
    skill2Label: "第2スキル",
    sp2Label: "第2SP",
    slotLabel: "スロット",
    aroundFrameLabel: "基準フレーム",
    aroundRadiusLabel: "前後幅",
    searchBtn: "検索する",
    searchGreaterBtn: "以上で検索する",
    cancelJobBtn: "実行中ジョブをキャンセル",
    presetCrisisBtn: "サンプル: 窮地4 回量2 S0",
    presetChainCritBtn: "サンプル: 連撃4 痛撃5 S3",
    aroundBtn: "表示する",
    noResults: "該当なしでした。",
    resultsFound: (count) => `${count} 件見つかりました。`,
    searchRunning: "検索中...",
    searchProgress: (label, current, total) => `${label} 実行中: ${current.toLocaleString()} / ${total.toLocaleString()}`,
    searchDone: (label, limit) => `${label} 完了: ${limit.toLocaleString()} フレームを確認しました。`,
    searchCancelled: "検索をキャンセルしました。",
    aroundComputing: "計算中...",
    aroundCancelled: "前後表示をキャンセルしました。",
    limitError: "検索回数は 1 以上の整数にしてください。",
    frameError: "基準フレームは 0 以上の整数にしてください。",
    radiusError: "前後幅は 1 以上の整数にしてください。",
    frameHeader: "frame",
    watchHeader: "watch",
    charmHeader: "charm",
    offsetHeader: "offset",
  },
  en: {
    pageTitle: "MHXX RNG Minimal Web",
    pageIntro: "A minimal browser version of `search`, `search_greater`, and `around`. Heavier notebook-only helpers are not included yet.",
    searchSectionTitle: "Charm Search",
    aroundSectionTitle: "Around Frame",
    localeLabel: "Language",
    kindLabel: "Charm kind",
    originLabel: "Origin",
    limitLabel: "Search limit",
    skill1Label: "Skill 1",
    sp1Label: "Skill 1 SP",
    skill2Label: "Skill 2",
    sp2Label: "Skill 2 SP",
    slotLabel: "Slots",
    aroundFrameLabel: "Base frame",
    aroundRadiusLabel: "Radius",
    searchBtn: "Search",
    searchGreaterBtn: "Search with minimums",
    cancelJobBtn: "Cancel running job",
    presetCrisisBtn: "Sample: Crisis 4 / Rec Level 2 / S0",
    presetChainCritBtn: "Sample: Chain Crit 4 / Tenderizer 5 / S3",
    aroundBtn: "Show",
    noResults: "No matches found.",
    resultsFound: (count) => `${count} result(s) found.`,
    searchRunning: "Searching...",
    searchProgress: (label, current, total) => `${label} running: ${current.toLocaleString()} / ${total.toLocaleString()}`,
    searchDone: (label, limit) => `${label} complete: checked ${limit.toLocaleString()} frames.`,
    searchCancelled: "Search cancelled.",
    aroundComputing: "Computing...",
    aroundCancelled: "Around-frame job cancelled.",
    limitError: "Search limit must be an integer of 1 or more.",
    frameError: "Base frame must be an integer of 0 or more.",
    radiusError: "Radius must be an integer of 1 or more.",
    frameHeader: "frame",
    watchHeader: "watch",
    charmHeader: "charm",
    offsetHeader: "offset",
  },
  zh: {
    pageTitle: "MHXX RNG Web 精简版",
    pageIntro: "这是一个浏览器版的 `search`、`search_greater` 与 `around` 精简实现，暂未包含 notebook 中更重的高级功能。",
    searchSectionTitle: "护石搜索",
    aroundSectionTitle: "前后显示",
    localeLabel: "语言",
    kindLabel: "护石种类",
    originLabel: "来源",
    limitLabel: "搜索次数",
    skill1Label: "第1技能",
    sp1Label: "第1技能点",
    skill2Label: "第2技能",
    sp2Label: "第2技能点",
    slotLabel: "孔位",
    aroundFrameLabel: "基准帧",
    aroundRadiusLabel: "前后范围",
    searchBtn: "搜索",
    searchGreaterBtn: "按下限搜索",
    cancelJobBtn: "取消当前任务",
    presetCrisisBtn: "示例: 绝境4 / 回复量2 / S0",
    presetChainCritBtn: "示例: 连击4 / 痛击5 / S3",
    aroundBtn: "显示",
    noResults: "没有找到结果。",
    resultsFound: (count) => `找到 ${count} 个结果。`,
    searchRunning: "搜索中...",
    searchProgress: (label, current, total) => `${label} 进行中: ${current.toLocaleString()} / ${total.toLocaleString()}`,
    searchDone: (label, limit) => `${label} 完成: 已检查 ${limit.toLocaleString()} 帧。`,
    searchCancelled: "已取消搜索。",
    aroundComputing: "计算中...",
    aroundCancelled: "已取消前后显示任务。",
    limitError: "搜索次数必须是大于等于 1 的整数。",
    frameError: "基准帧必须是大于等于 0 的整数。",
    radiusError: "前后范围必须是大于等于 1 的整数。",
    frameHeader: "frame",
    watchHeader: "watch",
    charmHeader: "charm",
    offsetHeader: "offset",
  },
};

const LOCALE_OPTIONS = [
  { value: "ja", label: "日本語" },
  { value: "en", label: "English" },
  { value: "zh", label: "简体中文" },
];

const STATIC_TEXT_IDS = [
  "pageTitle",
  "pageIntro",
  "searchSectionTitle",
  "aroundSectionTitle",
  "localeLabel",
  "kindLabel",
  "originLabel",
  "limitLabel",
  "skill1Label",
  "sp1Label",
  "skill2Label",
  "sp2Label",
  "slotLabel",
  "aroundFrameLabel",
  "aroundRadiusLabel",
];

function currentLocale() {
  return localeSelect.value || "ja";
}

function t() {
  return UI_TEXT[currentLocale()] ?? UI_TEXT.ja;
}

function setJobRunning(isRunning, jobType = null) {
  activeJobType = isRunning ? jobType : null;
  cancelJobBtn.disabled = !isRunning;
}

function stopActiveWorker() {
  if (!activeWorker) {
    return false;
  }

  activeWorker.terminate();
  activeWorker = null;
  setJobRunning(false);
  return true;
}

function createWorkerJob(payload, jobType, handlers = {}) {
  stopActiveWorker();

  return new Promise((resolve, reject) => {
    const worker = new Worker(new URL("./search-worker.mjs", import.meta.url), {
      type: "module",
    });

    activeWorker = worker;
    setJobRunning(true, jobType);

    worker.onmessage = (event) => {
      if (worker !== activeWorker) {
        return;
      }

      const data = event.data;
      if (data.type === "progress") {
        handlers.onProgress?.(data);
        return;
      }

      activeWorker = null;
      setJobRunning(false);
      worker.terminate();

      if (data.type === "error") {
        reject(new Error(data.message));
        return;
      }

      resolve(data);
    };

    worker.onerror = () => {
      if (worker !== activeWorker) {
        return;
      }

      activeWorker = null;
      setJobRunning(false);
      worker.terminate();
      reject(new Error("Worker execution failed."));
    };

    worker.postMessage(payload);
  });
}

function fillSelect(select, options, selectedValue = null) {
  select.innerHTML = "";

  for (const option of options) {
    const element = document.createElement("option");
    element.value = String(option.value);
    element.textContent = option.label;
    if (selectedValue !== null && String(option.value) === String(selectedValue)) {
      element.selected = true;
    }
    select.append(element);
  }
}

function updateStaticText() {
  const text = t();

  for (const id of STATIC_TEXT_IDS) {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.textContent = text[id];
    }
  }

  searchBtn.textContent = text.searchBtn;
  searchGreaterBtn.textContent = text.searchGreaterBtn;
  cancelJobBtn.textContent = text.cancelJobBtn;
  presetCrisisBtn.textContent = text.presetCrisisBtn;
  presetChainCritBtn.textContent = text.presetChainCritBtn;
  aroundBtn.textContent = text.aroundBtn;
}

function populateLocaleSelect() {
  fillSelect(localeSelect, LOCALE_OPTIONS, currentLocale() || "ja");
}

function populateCatalogSelects() {
  const kindValue = kindSelect.value || "0";
  const originValue = originSelect.value || "0";

  fillSelect(
    kindSelect,
    getKindLabels(currentLocale()).map((label, value) => ({ value, label })),
    kindValue,
  );
  fillSelect(
    originSelect,
    getOriginLabels(currentLocale()).map((label, value) => ({ value, label })),
    originValue,
  );
}

function currentKindIndex() {
  return Number(kindSelect.value);
}

function currentOriginIndex() {
  return Number(originSelect.value);
}

function currentSkillIndex(select) {
  return Number(select.value);
}

function populatePointSelect(targetSelect, which, skillIndex, preferredValue = null) {
  const values = getPointOptions(currentKindIndex(), currentOriginIndex(), skillIndex, which);
  fillSelect(
    targetSelect,
    values.map((value) => ({ value, label: String(value) })),
    preferredValue ?? values[0],
  );
}

function populateSkillSelects(preferred = {}) {
  const options = getSkillOptions(currentKindIndex(), currentLocale());

  fillSelect(
    skill1Select,
    options.skill1.map((option, index) => ({ value: index, label: option.name })),
    preferred.skill1Index ?? 0,
  );
  fillSelect(
    skill2Select,
    options.skill2.map((option, index) => ({ value: index, label: option.name })),
    preferred.skill2Index ?? 0,
  );

  populatePointSelect(sp1Select, 1, currentSkillIndex(skill1Select), preferred.sp1);
  populatePointSelect(sp2Select, 2, currentSkillIndex(skill2Select), preferred.sp2);
}

function selectedText(select) {
  return select.options[select.selectedIndex]?.textContent ?? "";
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;");
}

function renderSearchResults(results) {
  lastSearchResults = results;

  if (results.length === 0) {
    searchOutput.innerHTML = `<p>${escapeHtml(t().noResults)}</p>`;
    return;
  }

  const rows = results.map((result) => `
    <tr>
      <td>${result.frame}</td>
      <td>${escapeHtml(result.watch)}</td>
      <td>${escapeHtml(describeCharm(result.charm, currentLocale()))}</td>
    </tr>
  `).join("");

  searchOutput.innerHTML = `
    <p>${escapeHtml(t().resultsFound(results.length))}</p>
    <table>
      <thead>
        <tr>
          <th>${escapeHtml(t().frameHeader)}</th>
          <th>${escapeHtml(t().watchHeader)}</th>
          <th>${escapeHtml(t().charmHeader)}</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

async function runSearch(mode) {
  const limit = Number(limitInput.value);
  if (!Number.isInteger(limit) || limit <= 0) {
    throw new Error(t().limitError);
  }

  searchStatus.textContent = t().searchRunning;
  searchOutput.innerHTML = "";
  lastSearchResults = null;
  await new Promise((resolve) => requestAnimationFrame(resolve));

  const query = buildQueryFromIndexes(
    currentKindIndex(),
    currentOriginIndex(),
    currentSkillIndex(skill1Select),
    Number(sp1Select.value),
    currentSkillIndex(skill2Select),
    Number(sp2Select.value),
    Number(slotSelect.value),
  );
  const label = mode === "greater" ? t().searchGreaterBtn : t().searchBtn;
  const result = await createWorkerJob(
    {
      type: "search",
      mode,
      query,
      limit,
    },
    "search",
    {
      onProgress(data) {
        searchStatus.textContent = t().searchProgress(label, data.current, data.total);
      },
    },
  );

  const results = result.results;
  searchStatus.textContent = t().searchDone(label, limit);
  renderSearchResults(results);
}

function renderAroundResults(rows) {
  lastAroundRows = rows;
  const body = rows.map((row) => `
    <tr class="${row.offset === 0 ? "current" : ""}">
      <td>${row.offset >= 0 ? `+${row.offset}` : row.offset}</td>
      <td>${row.frame}</td>
      <td>${escapeHtml(describeCharm(row.charm, currentLocale()))}</td>
    </tr>
  `).join("");

  aroundOutput.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>${escapeHtml(t().offsetHeader)}</th>
          <th>${escapeHtml(t().frameHeader)}</th>
          <th>${escapeHtml(t().charmHeader)}</th>
        </tr>
      </thead>
      <tbody>${body}</tbody>
    </table>
  `;
}

function setPreset({ kindIndex, originIndex, skill1Id, sp1, skill2Id, sp2, slotCount, aroundFrame }) {
  const config = getKindConfig(kindIndex);
  kindSelect.value = String(kindIndex);
  originSelect.value = String(originIndex);
  populateCatalogSelects();
  populateSkillSelects();
  skill1Select.value = String(config.skill1.indexOf(skill1Id));
  skill2Select.value = String(config.skill2.indexOf(skill2Id));

  populatePointSelect(sp1Select, 1, currentSkillIndex(skill1Select), sp1);
  populatePointSelect(sp2Select, 2, currentSkillIndex(skill2Select), sp2);

  slotSelect.value = String(slotCount);
  aroundFrameInput.value = String(aroundFrame);
}

kindSelect.addEventListener("change", () => {
  populateSkillSelects();
});

originSelect.addEventListener("change", () => {
  populatePointSelect(sp2Select, 2, currentSkillIndex(skill2Select));
});

localeSelect.addEventListener("change", () => {
  const skill1Value = skill1Select.value || "0";
  const skill2Value = skill2Select.value || "0";
  const sp1Value = sp1Select.value;
  const sp2Value = sp2Select.value;

  updateStaticText();
  populateCatalogSelects();
  populateSkillSelects({
    skill1Index: Number(skill1Value),
    skill2Index: Number(skill2Value),
    sp1: Number(sp1Value),
    sp2: Number(sp2Value),
  });

  if (lastSearchResults) {
    renderSearchResults(lastSearchResults);
  }
  if (lastAroundRows) {
    renderAroundResults(lastAroundRows);
  }
});

skill1Select.addEventListener("change", () => {
  populatePointSelect(sp1Select, 1, currentSkillIndex(skill1Select));
});

skill2Select.addEventListener("change", () => {
  populatePointSelect(sp2Select, 2, currentSkillIndex(skill2Select));
});

searchBtn.addEventListener("click", async () => {
  try {
    await runSearch("exact");
  } catch (error) {
    searchStatus.textContent = error.message;
    searchOutput.innerHTML = "";
  }
});

searchGreaterBtn.addEventListener("click", async () => {
  try {
    await runSearch("greater");
  } catch (error) {
    searchStatus.textContent = error.message;
    searchOutput.innerHTML = "";
  }
});

aroundBtn.addEventListener("click", async () => {
  try {
    const frame = Number(aroundFrameInput.value);
    const radius = Number(aroundRadiusInput.value);
    if (!Number.isInteger(frame) || frame < 0) {
      throw new Error(t().frameError);
    }
    if (!Number.isInteger(radius) || radius <= 0) {
      throw new Error(t().radiusError);
    }

    aroundOutput.innerHTML = `<p>${escapeHtml(t().aroundComputing)}</p>`;
    lastAroundRows = null;
    await new Promise((resolve) => requestAnimationFrame(resolve));
    const result = await createWorkerJob(
      {
        type: "around",
        kindIndex: currentKindIndex(),
        originIndex: currentOriginIndex(),
        frame,
        radius,
      },
      "around",
    );
    renderAroundResults(result.rows);
  } catch (error) {
    aroundOutput.innerHTML = `<p>${escapeHtml(error.message)}</p>`;
  }
});

cancelJobBtn.addEventListener("click", () => {
  const jobType = activeJobType;
  if (!stopActiveWorker()) {
    return;
  }

  if (jobType === "search") {
    searchStatus.textContent = t().searchCancelled;
    return;
  }

  if (jobType === "around") {
    aroundOutput.innerHTML = `<p>${escapeHtml(t().aroundCancelled)}</p>`;
  }
});

presetCrisisBtn.addEventListener("click", () => {
  setPreset({
    kindIndex: 0,
    originIndex: 0,
    skill1Id: 100,
    sp1: 4,
    skill2Id: 116,
    sp2: 2,
    slotCount: 0,
    aroundFrame: 1725,
  });
});

presetChainCritBtn.addEventListener("click", () => {
  setPreset({
    kindIndex: 0,
    originIndex: 0,
    skill1Id: 71,
    sp1: 4,
    skill2Id: 70,
    sp2: 5,
    slotCount: 3,
    aroundFrame: 4723,
  });
});

populateLocaleSelect();
updateStaticText();
populateCatalogSelects();
populateSkillSelects();
setPreset({
  kindIndex: 0,
  originIndex: 0,
  skill1Id: 71,
  sp1: 4,
  skill2Id: 70,
  sp2: 5,
  slotCount: 3,
  aroundFrame: 4723,
});
