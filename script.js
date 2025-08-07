// const db = {
//     circle1: 0,
//     circle2: 0,
//     circle3: 0,
//   };

  function setCircleColor(id, active) {
    const el = document.getElementById(id);
    if (!el) return;

    el.classList.remove("green", "orange");

    if (active) {
      el.classList.add("green");
    } else {
      el.classList.add("orange");
    }
  }

  function setRollerState(rollerId, direction = null) {
    const roller = document.getElementById(rollerId);
    const circleId = "circle" + rollerId.replace("roller", "");
    roller.classList.remove("rotate-cw", "rotate-ccw", "paused");

    if (direction === "cw") {
      roller.classList.add("rotate-cw");
      setCircleColor(circleId, true);
    } else if (direction === "ccw") {
      roller.classList.add("rotate-ccw");
      setCircleColor(circleId, true);
    } else {
      setCircleColor(circleId, false); // set orange for stopped
    }
  }

  function stopAllRollers() {
    for (let i = 1; i <= 3; i++) {
      setRollerState("roller" + i, null); // stop and make orange
    }
  }

  function triggerRotation(from, to) {
    stopAllRollers();

    if (from === 3 && to === 1) {
      // circle3 → circle1 = anticlockwise
      setRollerState("roller1", "ccw");
      setRollerState("roller3", "ccw");
    } else if (from === 1 && to === 2) {
      // circle1 → circle2 = clockwise
      setRollerState("roller1", "cw");
      setRollerState("roller2", "cw");
    } else if (from === 2 && to === 1) {
      // circle2 → circle1 = anticlockwise
      setRollerState("roller1", "ccw");
      setRollerState("roller2", "ccw");
    }else if (from === 3 && to === 2) {
      // circle2 → circle1 = anticlockwise
      setRollerState("roller3", "ccw");
      setRollerState("roller2", "ccw");
    }
  }

  function addTyreGrips(rollerId, count = 12) {
  const roller = document.getElementById(rollerId);
  for (let i = 0; i < count; i++) {
    const nub = document.createElement("div");
    nub.classList.add("tyre-nub");
    const angle = (360 / count) * i;
    nub.style.transform = `rotate(${angle}deg) translate(-50%, -100%)`;
    roller.appendChild(nub);
  }
}


  
  for (let i = 1; i <= 3; i++) {
    addTyreGrips("roller" + i);
    setCircleColor("circle" + i, false); 
  }

  // Example usage:
  // triggerRotation(3,1);
  // triggerRotation(1, 2);
    triggerRotation(2,1);