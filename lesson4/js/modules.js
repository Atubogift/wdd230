let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let fulldate =
    dayName +
    ", " +
    monthName +
    " " +
    d.getDate() +
    ", " +
    d.getFullYear();

document.getElementById("currentdate").textContent = fulldate;

document.getElementById("currentyear").textContent = d.getFullYear();

let oLastModif = new Date(document.lastModified);
document.getElementById("lastModified").textContent = oLastModif;



function toggleMenu() {
    document.getElementsByClassName("navigator")[1].classList.toggle("responsive");
}
const millisecondsToDays = 8640000;

const lastVisit = localStorage.getItem("lastvisit");