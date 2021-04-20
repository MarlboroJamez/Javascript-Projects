//Challenge 1: Your age in days!

function submitResult() {
  var birthYear = document.getElementById("birth").value;
  var currentYear = document.getElementById("current").value;
  var totalAge = "Total Days: " + (currentYear - birthYear) * 365;
  document.getElementById('totalDays').style.display = 'block';
  let lbl = document.getElementById('totalDays');
  lbl.innerText = totalAge + " days old";
}

function onReset() {
  document.getElementById("birth").value = '';
  document.getElementById("current").value = '';
  document.getElementById("totalDays").style.display = 'none';
  alert("All Clear :)");
}