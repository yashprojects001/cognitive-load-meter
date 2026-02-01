let mouseMoves = 0;
let tabSwitches = 0;
let scrolls = 0;

document.addEventListener("mousemove", () => {
  mouseMoves++;
  update();
});

document.addEventListener("scroll", () => {
  scrolls++;
  update();
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) tabSwitches++;
  update();
});

function update() {
  document.getElementById("mouse").innerText = mouseMoves;
  document.getElementById("tabs").innerText = tabSwitches;
  document.getElementById("scroll").innerText = scrolls;

  let load =
    mouseMoves * 0.1 +
    scrolls * 0.4 +
    tabSwitches * 5;

  load = Math.min(100, Math.floor(load));

  document.getElementById("bar").style.width = load + "%";
  document.getElementById("score").innerText = `Load: ${load}%`;

  let status = "Calm mind 😌";
  if (load > 30) status = "Light mental load 🙂";
  if (load > 60) status = "High cognitive load 😵";
  if (load > 85) status = "Overload ⚠️ Take a break!";

  document.getElementById("status").innerText = status;
}
