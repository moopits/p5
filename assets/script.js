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


// create dots a la volé pour la size de slides[]
function createDots() {
	const dots = document.querySelector('.dots') // usefull for function createDots()

	for (let i = 0; i < slides.length; i++) { // repete slides.lenght fois
		const dot = document.createElement("div") // cré une 'div'
		dot.classList.add("dot") // ajoute une class 'dot' dans la 'div'
		dots.appendChild(dot) // ajoute le tout entre le container('div) avec la class "dots"
	}
}


// init index 0  (0 -> slides.length)
let p = 0 

// call createDots() (balls)
createDots()


// Get attributs img element
const bannerImg = document.querySelector('.banner-img')

// Get p element from id="banner"
const bannerP = document.querySelector('#banner p')

// Create array ONLY .dot for indexing
const dotAll = document.querySelectorAll('.dot');
console.log('show array')
console.log(dotAll)

// Init ref to index [0]  class(' dot dot_selected)
dotAll[p].classList.add('dot_selected');

// Left-arrow - calcul index p
const arrowLeft = document.querySelector('.arrow_left') // usefull for click mouse button
arrowLeft.addEventListener('click', () => {
	p = p - 1
	if(p == - 1) {
		p = slides.length - 1
	}
	changeImgBall()
}
)

// Right-arrow - calcul index p
const arrowRight = document.querySelector('.arrow_right') // usefull for click mouse button
arrowRight.addEventListener('click', () => {
	p = p + 1
	if(p == slides.length) {
		p = 0
	}
	changeImgBall()
}
)

// function appel click mouse button right/left
const changeImgBall = () => {

	// Remove 'dot_selected' class from all dots
    dotAll.forEach(dot => dot.classList.remove('dot_selected'));
	
	// Select a dot with [p] and add 'dot_selected' class
	dotAll[p].classList.add('dot_selected');

	// Change the 'image' from array objects
	bannerImg.src = "./assets/images/slideshow/" + slides[p].image

	// update p element from id="banner"
	bannerP.innerHTML = slides[p].tagLine
}
