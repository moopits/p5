const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
console.log(slides)
// var
const arrowLeft = document.querySelector('.arrow_left')
const arrowRight = document.querySelector('.arrow_right')
const dots = document.querySelector('.dots')
console.log(arrowLeft) // infos
console.log(arrowRight) // infos
console.log(dots) // infos

// dots
function showDots() {
	for (let i = 0; i < slides.length; i++) { // repete slides.lenght fois
		//const element = slides[i];
		const dot = document.createElement("div") // cré une 'div'
		dot.classList.add("dot") // ajoute une class 'dot' dans la 'div'
		dots.appendChild(dot) // ajoute le tout entre le container('div) avec la class "dots"
	}
}
console.log('nbr obj in slides tab: ' + slides.length) // infos
showDots()  // launch la fonction showDots()

// left-arrow

// right-arrow

arrowLeft.addEventListener('click', () => changeImg())
arrowRight.addEventListener('click', () => changeImg())


const changeImg = () => {
	console.log('click sur arrow')
}
