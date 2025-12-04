// ==== Uhrzeiger ====
const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

// ==== Uhr Zahlen ====
const clock = document.getElementById('clock');
const clockRadius = clock.offsetWidth / 2;

// Zahlen von 1 bis 12 erstellen
for (let i = 1; i <= 12; i++) {
    const num = document.createElement('div');
    num.classList.add('num');
    num.textContent = i;

    // Winkel in Bogenmaß (-90°, damit 12 oben)
    const angle = (i * 30 - 90) * (Math.PI / 180);
    const radius = clockRadius * 0.85;

    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    num.style.left = `calc(50% + ${x}px)`;
    num.style.top = `calc(50% + ${y}px)`;

    clock.appendChild(num);
}

// ==== Uhr aktualisieren ====
function updateClock() {
    const now = new Date();

    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours + minutes / 60) * 30;      // 360/12 = 30°
    const minuteDeg = (minutes + seconds / 60) * 6;  // 360/60 = 6°
    const secondDeg = seconds * 6;

    hourHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${secondDeg}deg)`;
}

// Jede Sekunde aktualisieren
setInterval(updateClock, 1000);
updateClock(); // Direkt beim Laden aufrufen

// ==== Dark/Light Mode Toggle ====
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
