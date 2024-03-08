import { words,abcStr } from "./words.js";

window.addEventListener('DOMContentLoaded', ()=>{
	document.querySelector(".start").addEventListener('click',start);
})
let randWord;
console.log("Teszt1 megy a függvény")

function start(){
	const randIndex = Math.floor(Math.random()*words.length);
	randWord = words[randIndex];
	displayBoxes(randWord, 'boxContainer');
	displayAbc(abcStr, 'abc');
	console.log(randWord)
}

export function displayBoxes(word, id){
	document.getElementById(id).innerHTML='';
	Array.from(word).forEach(letter=>
			document.getElementById(id).innerHTML+=`
				<div class="box border-2 rounded-md border-cyan-200 sm:w-[85px] sm:h-[85px] w-[60px] h-[60px] m-1 bg-cyan-700 flex justify-center items-center text-2xl hover:scale-105 transition-all cursor-pointer"></div>
			`

		)
}

export function displayAbc(str, id){
	document.getElementById(id).innerHTML=''
	Array.from(str).forEach(letter=>
		document.getElementById(id).innerHTML+=`
		<button class="letter w-[35px] h-[35px] text-center items-center border-2 rounded-md border-cyan-200/70 bg-cyan-800/50 hover:scale-110 transition-all disabled:bg-cyan-950">${letter}</button>
		`
		)
		document.querySelectorAll(".letter").forEach(btn => 
			btn.addEventListener("click", checkLetter)
			)

}

export function checkLetter(e){
	let clickedLetter = e.target.textContent;
	let boxNodeList = document.querySelectorAll('.box')//olyan mint egy tömb
	// console.log(clickedLetter)
	Array.from(randWord).forEach((letter, index)=>{
			if(clickedLetter == letter) boxNodeList[index].textContent=letter;
	})
	e.target.disabled = true //amelyikre kattintottál
	
}



