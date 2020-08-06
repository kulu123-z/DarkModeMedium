
// Dark Theme for Medium Web

let dark = "#191919";
let light = "#FAFAFA" ;
let mark = "#212121";

document.querySelectorAll('svg').forEach(e => e.style.fill = light);

document.querySelector("nav").style.backgroundColor = dark;
document.querySelectorAll("nav div").forEach(e => e.style.backgroundColor = dark);

document.querySelectorAll("article").forEach(e => e.style.backgroundColor = dark);
document.querySelectorAll("#root > div > article > div section")
  .forEach(e => e.style.backgroundColor = dark);
document.querySelectorAll("#root > div > article > div hr")
  .forEach(e => e.style.backgroundColor = dark);
document.querySelectorAll("#root > div > article > div hr")
  .forEach(e => e.style.color = light);
document.querySelectorAll('p').forEach(e => e.style.color = light);
document.querySelectorAll('strong').forEach(e => e.style.color = light);
document.querySelectorAll('li').forEach(e => e.style.color = light);
document.querySelectorAll('mark').forEach(e => e.style.color = mark);

document.querySelectorAll('h1').forEach(e => e.style.color = light);
document.querySelectorAll('h2').forEach(e => e.style.color = light);
document.querySelectorAll('h3').forEach(e => e.style.color = light);
document.querySelectorAll('h4').forEach(e => e.style.color = light);
document.querySelectorAll('h5').forEach(e => e.style.color = light);
document.querySelectorAll('h6').forEach(e => e.style.color = light);

document.querySelectorAll('span h6').forEach(e => e.style.color = light);
