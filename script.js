let ctitle1 = document.getElementsByClassName("card-title")[0];
ctitle1.style.color = "red";

let ctitle2 = document.getElementById("firstCardTitle");
ctitle2.style.background = "cyan";

let ctitles = document.querySelectorAll(".card-title");
ctitles[1].style.color = "blue";
ctitles[2].style.color = "green";
ctitles[1].style.background = "lightgrey";
ctitles[2].style.background = "lightpink";

let cfooter = document.querySelector(".this");
cfooter.style.background = "lightblue";
cfooter.style.color = "red";

console.log(document.getElementsByTagName("a"));

console.log(document.querySelector(".card").getElementsByTagName("a"));

console.log(document.getElementsByName("search"));
