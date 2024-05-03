let myName = document.getElementById("myName");

myName.innerHTML = prompt("Adınız Nedir?");


let myClock = document.querySelector("#myClock")

function showTime() { //Şuanki zaman

var currentDate = new Date();

//Tarih ve Saat Bilgisi

var year = currentDate.getFullYear();
var month = currentDate.getMonth();
var day = currentDate.getDate();
var hours =  currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();

return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;

}

myClock.innerHTML = showTime();