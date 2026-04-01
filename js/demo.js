// Base recipe: Herb Roasted Chicken Dinner for 4 people
const BASE_GUESTS = 4;
const BASE_COST = 42; // $42 for 4 people base

const ingredients = [
  { name: "Chicken breasts", base: 4, baseUnit: "pcs", unitCost: 3.5 },
  { name: "Olive oil", base: 3, baseUnit: "tbsp", unitCost: 0.12, scaleFn: (g) => `${(g * 0.75 / 1000).toFixed(1)} L` },
  { name: "Garlic cloves", base: 4, baseUnit: "cloves", unitCost: 0.08 },
  { name: "Russet potatoes", base: 2, baseUnit: "lbs", unitCost: 0.7 },
  { name: "Heavy cream", base: 0.5, baseUnit: "cups", unitCost: 0.45, scaleFn: (g) => `${(g * 0.125).toFixed(1)} cups` },
  { name: "Unsalted butter", base: 4, baseUnit: "tbsp", unitCost: 0.15 },
  { name: "Mixed vegetables", base: 1.5, baseUnit: "lbs", unitCost: 1.2 },
  { name: "Chicken broth", base: 1, baseUnit: "cup", unitCost: 0.35, scaleFn: (g) => `${(g / 4).toFixed(1)} cups` },
  { name: "Fresh thyme", base: 4, baseUnit: "sprigs", unitCost: 0.25 },
  { name: "Lemon", base: 1, baseUnit: "pc", unitCost: 0.5 },
];

let currentGuests = 50;
let styleMultiplier = 1.0;

function formatQuantity(item, guests) {
  const ratio = guests / BASE_GUESTS;

  if (item.scaleFn) {
    return item.scaleFn(guests);
  }

  const scaled = item.base * ratio * styleMultiplier;

  // Smart unit conversion
  if (item.baseUnit === "pcs" || item.baseUnit === "pc" || item.baseUnit === "sprigs" || item.baseUnit === "cloves") {
    return `${Math.ceil(scaled)} ${item.baseUnit === "pcs" || item.baseUnit === "pc" ? (scaled === 1 ? "pc" : "pcs") : item.baseUnit}`;
  } else if (item.baseUnit === "lbs") {
    return `${scaled.toFixed(1)} lbs`;
  } else if (item.baseUnit === "tbsp") {
    if (scaled >= 16) return `${(scaled / 16).toFixed(1)} cups`;
    return `${scaled.toFixed(0)} tbsp`;
  } else if (item.baseUnit === "cups") {
    return `${scaled.toFixed(1)} cups`;
  }

  return `${scaled.toFixed(1)} ${item.baseUnit}`;
}

function formatBase(item) {
  return `${item.base} ${item.baseUnit}`;
}

function calcCosts(guests) {
  let total = 0;
  ingredients.forEach(item => {
    const ratio = guests / BASE_GUESTS;
    total += item.unitCost * item.base * ratio * styleMultiplier;
  });
  // Add overhead (20%)
  total *= 1.2;
  return total;
}

function updateScaling() {
  const slider = document.getElementById('guestCount');
  currentGuests = parseInt(slider.value);
  renderDemo();
}

function adjustGuests(delta) {
  const slider = document.getElementById('guestCount');
  const newVal = Math.max(10, Math.min(500, parseInt(slider.value) + delta));
  slider.value = newVal;
  currentGuests = newVal;
  renderDemo();
}

function setStyle(btn, multiplier) {
  document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  styleMultiplier = multiplier;
  renderDemo();
}

function renderDemo() {
  document.getElementById('guestNum').textContent = currentGuests;

  const styleLabel = styleMultiplier === 1 ? 'Plated' : styleMultiplier > 1 ? 'Buffet' : 'Cocktail';
  document.getElementById('demoBadge').textContent = `${currentGuests} guests · ${styleLabel}`;

  // Render table
  const table = document.getElementById('ingredientTable');
  let html = `
    <div class="demo-ingredient-row header">
      <span>Ingredient</span>
      <span>Base (4 people)</span>
      <span>Scaled (${currentGuests})</span>
    </div>
  `;

  ingredients.forEach(item => {
    html += `
      <div class="demo-ingredient-row">
        <span class="demo-ingredient-name">${item.name}</span>
        <span class="demo-ingredient-base">${formatBase(item)}</span>
        <span class="demo-ingredient-scaled">${formatQuantity(item, currentGuests)}</span>
      </div>
    `;
  });

  table.innerHTML = html;

  // Cost
  const total = calcCosts(currentGuests);
  const perGuest = total / currentGuests;
  const prepHours = Math.max(1.5, (currentGuests / 50) * 2.5);

  document.getElementById('totalCost').textContent = `$${total.toFixed(0)}`;
  document.getElementById('perGuest').textContent = `$${perGuest.toFixed(2)}`;
  document.getElementById('prepTime').textContent = `${prepHours.toFixed(1)} hrs`;
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderDemo();
});
