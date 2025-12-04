


const clock = document.getElementById('clock');
const count = 12;
const radiusPercent = 42; // Radius in percentage of the clock's radius

for (let i=1; i<=count; i++) {
    const el = document.createElement('div');
    el.className = 'num';
    el.textContent = i.toString(); // 1 bis 12

const step = 360 / count;
const angleDeg = (i * step) - 90; // -90 damit 12 oben ist
const angleRad = angleDeg * Math.PI / 180;

const r = radiusPercent;
const leftPercent = 50 + r * Math.cos(angleRad);
const topPercent = 50 + r * Math.sin(angleRad);

    el.style.left = leftPercent + '%';
    el.style.top = topPercent + '%';

    clock.appendChild(el);

}
function updateClock() {
  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hr = now.getHours();

  // Winkel berechnen
  const secDeg = sec * 6;                  // 360° / 60
  const minDeg = min * 6 + sec * 0.1;      // Sekundenanteil berücksichtigen
  const hrDeg  = (hr % 12) * 30 + min * 0.5; // Minutenanteil berücksichtigen

  // Nur drehen – translate steht schon im CSS!
  document.getElementById('second').style.transform =
    `translateX(-50%) translateY(-100%) rotate(${secDeg}deg)`;
  document.getElementById('minute').style.transform =
    `translateX(-50%) translateY(-100%) rotate(${minDeg}deg)`;
  document.getElementById('hour').style.transform =
    `translateX(-50%) translateY(-100%) rotate(${hrDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); // sofort aufrufen, damit die Uhr nicht erst nach 1 Sekunde startet  

