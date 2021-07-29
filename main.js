var arreyj = [];
var arreyk = [];
var arreyconf = [];

while (arreyj.length < 5) {
  var randomNumber = Math.floor(Math.random() * 100) + 1;
  if (!arreyj.includes(randomNumber)) {
    arreyj.push(randomNumber);
  }
}

alert("Memorizza 5 numeri: " + arreyj);
setTimeout(function () {
  while (arreyconf.length < arreyj.length) {
    var userNum = parseInt(prompt("Inserisci un numero"));
    if (isNaN(userNum)) {
      alert("Devi inserire un numero");
      var userNum = parseInt(prompt("Inserisci un numero"));
    } else {
      arreyconf.push(userNum);
    }
    if (arreyj.includes(userNum)) {
      arreyk.push(userNum);
    }
  }
  if (arreyk.length > 0) {
    document.getElementById("result").innerHTML =
      "Hai indovinato " + arreyk.length + " numeri su 5 :";
    var i = 0;
    while (i < arreyk.length) {
      document.getElementById("result").innerHTML += arreyk[i] + ", ";
      i++;
    }
  } else {
    document.getElementById("result").innerHTML = "0 numeri indovinati";
  }
}, 3000);
