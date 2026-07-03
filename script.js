// Japan Tour Itinerary — interactivity: tabs, filters, checkboxes w/ localStorage

const STORAGE_KEY = "japanTripChecked";

let activeDayIndex = 0;
let activeFilter = "all";

function loadChecked() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveChecked(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let checkedState = loadChecked();

function itemKey(dayId, itemName) {
  return `${dayId}::${itemName}`;
}

function renderTabs() {
  const tabsEl = document.getElementById("dayTabs");
  tabsEl.innerHTML = "";
  ITINERARY.forEach((day, idx) => {
    const btn = document.createElement("button");
    btn.className = `day-tab city-${day.city}` + (idx === activeDayIndex ? " active" : "");
    btn.innerHTML = `${day.date}<span class="tab-date">${day.city}</span>`;
    btn.addEventListener("click", () => {
      activeDayIndex = idx;
      renderTabs();
      renderDay();
    });
    tabsEl.appendChild(btn);
  });
}

function renderFilters() {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === activeFilter);
    btn.onclick = () => {
      activeFilter = btn.dataset.filter;
      renderFilters();
      renderDay();
    };
  });
}

function renderDay() {
  const day = ITINERARY[activeDayIndex];
  const content = document.getElementById("dayContent");

  const items = activeFilter === "all"
    ? day.items
    : day.items.filter(i => i.category === activeFilter);

  const cardsHtml = items.map(item => {
    const key = itemKey(day.id, item.name);
    const done = !!checkedState[key];
    return `
      <div class="card cat-${item.category} ${done ? "done" : ""}" data-key="${key}">
        <div class="card-check">${done ? "✓" : ""}</div>
        <div class="card-top">
          <div class="card-emoji">${item.emoji}</div>
          <div>
            <p class="card-name">${item.name}</p>
            <p class="card-note">${item.note}</p>
          </div>
        </div>
        <span class="card-tag">${item.category}</span>
      </div>
    `;
  }).join("");

  content.innerHTML = `
    <h2 class="day-title">${day.title}</h2>
    <p class="day-subtitle">${day.weekday}, ${day.date} · ${day.city}</p>
    <div class="card-grid">${cardsHtml}</div>
  `;

  content.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      const key = card.dataset.key;
      checkedState[key] = !checkedState[key];
      saveChecked(checkedState);
      renderDay();
      updateProgress();
    });
  });

  updateProgress();
}

function updateProgress() {
  let total = 0;
  let done = 0;
  ITINERARY.forEach(day => {
    day.items.forEach(item => {
      total++;
      if (checkedState[itemKey(day.id, item.name)]) done++;
    });
  });
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  document.getElementById("progressFill").style.width = pct + "%";
  document.getElementById("progressText").textContent = `${done} / ${total} done`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderTabs();
  renderFilters();
  renderDay();
});
