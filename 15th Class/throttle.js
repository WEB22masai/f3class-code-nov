let machineCount = 0;
let shotgunCount = 0;

let normalCountDisplay = document.getElementById("normal-count");
let throttleCountDisplay = document.getElementById("throttle-count");

const trigger = document.getElementById("trigger");

function shotgunFire() {
  //   shotgun
  shotgunCount++;
  throttleCountDisplay.innerText = shotgunCount;
}

const throttleFn = (normalFn, cooldownTime) => {
  let lastExeFnTime = 0;
  return function (...args) {
    let currentTime = new Date().getTime();
    if (currentTime - lastExeFnTime < cooldownTime) {
      // do nothing
      return;
    } else {
      normalFn(...args);
      lastExeFnTime = currentTime;
    }
  };
};

const modifiedShotGun = throttleFn(shotgunFire, 500);

trigger.addEventListener("click", () => {
  // normal machine gun
  machineCount++;
  normalCountDisplay.innerText = machineCount;
  modifiedShotGun();
});
