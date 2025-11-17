const schedule = [
  { league: 'Süper Lig', home: 'İstanbul FK', away: 'Ankara SK', date: '2024-07-12T18:00:00+03:00', venue: 'Atatürk Stadyumu' },
  { league: 'Süper Lig', home: 'Kuzeyspor', away: 'Ege United', date: '2024-07-13T20:00:00+03:00', venue: 'Deniz Arena' },
  { league: 'Premier League', home: 'London City', away: 'Seaside FC', date: '2024-07-13T14:30:00+03:00', venue: 'River Park' },
  { league: 'La Liga', home: 'Valencia Azul', away: 'Madrid Norte', date: '2024-07-14T22:00:00+03:00', venue: 'Mediterraneo' },
  { league: 'Serie A', home: 'Torino Rosso', away: 'Roma Sud', date: '2024-07-15T21:45:00+03:00', venue: 'Grande Stadio' }
];

function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('tr-TR', {
    weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit'
  }).format(date);
}

function populateLeagues() {
  const select = document.getElementById('league-select');
  const leagues = ['Tümü', ...new Set(schedule.map((item) => item.league))];
  leagues.forEach((league) => {
    const option = document.createElement('option');
    option.value = league;
    option.textContent = league;
    select.appendChild(option);
  });
  select.addEventListener('change', renderSchedule);
}

function renderSchedule() {
  const select = document.getElementById('league-select');
  const selectedLeague = select.value || 'Tümü';
  const list = document.getElementById('schedule-list');
  list.innerHTML = '';

  const filtered = selectedLeague === 'Tümü'
    ? schedule
    : schedule.filter((item) => item.league === selectedLeague);

  filtered
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .forEach((item) => {
      const li = document.createElement('li');
      li.className = 'schedule__item';
      li.innerHTML = `
        <div>
          <strong>${item.league}</strong><br>
          ${item.home} vs ${item.away}
        </div>
        <div class="schedule__meta">
          ${formatDate(item.date)}<br>
          ${item.venue}
        </div>
      `;
      list.appendChild(li);
    });
}

function updateClock() {
  const clock = document.querySelector('.clock');
  const now = new Date();
  const formatted = new Intl.DateTimeFormat('tr-TR', {
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  }).format(now);
  clock.textContent = formatted;
}

function animateScore() {
  const homeScoreEl = document.getElementById('home-score');
  const awayScoreEl = document.getElementById('away-score');
  const statusEl = document.getElementById('match-status');

  let home = 1;
  let away = 0;
  homeScoreEl.textContent = home;
  awayScoreEl.textContent = away;
  statusEl.textContent = '2. Devre · 68:14';

  setTimeout(() => {
    away = 1;
    awayScoreEl.textContent = away;
    statusEl.textContent = '2. Devre · 72:48 — GOL!';
  }, 3200);
}

function init() {
  populateLeagues();
  renderSchedule();
  animateScore();
  updateClock();
  setInterval(updateClock, 1000);
}

document.addEventListener('DOMContentLoaded', init);
