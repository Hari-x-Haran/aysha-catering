const menuData = {
  monday: {
    morning: 'Idli & Sambar',
    afternoon: 'Veg Meals',
    dinner: 'Chapati & Kurma',
  },
  tuesday: {
    morning: 'Pongal & Vada',
    afternoon: 'Lemon Rice & Fryums',
    dinner: 'Dosa & Chutney',
  },
  wednesday: {
    morning: 'Poori & Masala',
    afternoon: 'Sambar Rice + Beans Fry',
    dinner: 'Tomato Dosa',
  },
  thursday: {
    morning: 'Pongal & Coconut Chutney',
    afternoon: 'Curd Rice + Pickle',
    dinner: 'Parotta & Salna',
  },
  friday: {
    morning: 'Idiyappam & Coconut Milk',
    afternoon: 'Veg Biryani & Raita',
    dinner: 'Wheat Dosa',
  },
  saturday: {
    morning: 'Upma & Chutney',
    afternoon: 'Tomato Rice & Papad',
    dinner: 'Chapati & Veg Gravy',
  },
  sunday: {
    morning: 'Masala Dosa',
    afternoon: 'Special Meals',
    dinner: 'Appam & Veg Stew',
  },
};

const nav = document.getElementById('dayNav');
const display = document.getElementById('menuDisplay');

for (let day in menuData) {
  const btn = document.createElement('button');
  btn.innerText = day.toUpperCase();
  btn.onclick = () => {
    showMenu(day, btn);
  };
  nav.appendChild(btn);
}

function showMenu(day, btn) {
  const { morning, afternoon, dinner } = menuData[day];
  display.innerHTML = `
    <h3>${day.charAt(0).toUpperCase() + day.slice(1)} Menu</h3>
    <p><strong>Morning:</strong> ${morning}</p>
    <p><strong>Afternoon:</strong> ${afternoon}</p>
    <p><strong>Dinner:</strong> ${dinner}</p>
  `;
  display.style.display = 'block';

  // Highlight active button
  document.querySelectorAll('.mini-nav button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// Show today's menu on load
window.onload = () => {
  const today = new Date().toLocaleString('en-US', { weekday: 'long' }).toLowerCase();
  const btns = document.querySelectorAll('.mini-nav button');
  btns.forEach(btn => {
    if (btn.innerText.toLowerCase() === today) btn.click();
  });
};
