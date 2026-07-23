// ----- Mobile nav toggle -----
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ----- Live "uptime" counter since first commit (June 2021) -----
const START_DATE = new Date('2021-06-01T00:00:00');
const counterEl = document.getElementById('uptimeCounter');

function renderUptime() {
  if (!counterEl) return;
  const now = new Date();
  let years = now.getFullYear() - START_DATE.getFullYear();
  let months = now.getMonth() - START_DATE.getMonth();
  let days = now.getDate() - START_DATE.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  counterEl.textContent = `${years}y ${months}m ${days}d · 100% shipped`;
}

renderUptime();
// Keep it "live" without hammering the CPU — recheck once a minute is plenty.
setInterval(renderUptime, 60000);

// ----- Footer year -----
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
