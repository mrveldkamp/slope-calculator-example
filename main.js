// SLOPE CALCULATOR by MR. V

// Event Listener
document.getElementById("calc-btn").addEventListener("click", calcSlope);

// Event Function
function calcSlope() {
  // Input
  let x1 = +document.getElementById("x1").value;
  let y1 = +document.getElementById("y1").value;
  let x2 = +document.getElementById("x2").value;
  let y2 = +document.getElementById("y2").value;

  // Process
  let m = (y2 - y1) / (x2 - x1);

  // Output
  document.getElementById("result").innerHTML = m;
}