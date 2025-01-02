
const date = document.getElementsByClassName('datecalc')
const answer = document.getElementsByClassName('answer')
const calc = document.getElementsByClassName('calculate')
const today =  new Date().toISOString().split("T")[0];
date.setAttribute("max", today);