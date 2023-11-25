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
console.log(slides) // infos

// create var click mouse & dots
const arrowLeft = document.querySelector('.arrow_left') // usefull for click mouse button
const arrowRight = document.querySelector('.arrow_right') // usefull for click mouse button
const dots = document.querySelector('.dots') // usefull for function createDots()
console.log(arrowLeft) // infos
console.log(arrowRight) // infos
console.log(dots) // infos

// declaration function createDots()
// create dots a la volé pour la size de slides[]
function createDots() {
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

// infos init et size et contenu tab objects
console.log('nbr obj in slides tab: ' + slides.length) //control 
console.log('valeur de p = ' + p)  // infos
const slide = slides[p] // infos
console.log("Image:", slide.image) // infos
console.log("Tagline:", slide.tagLine) // infos

// Get attributs img element
const bannerImg = document.querySelector('.banner-img')
console.log(bannerImg) // infos
console.log(bannerImg.src) // infos
console.log("./assets/images/" + slides[1].image) // test

// Get p element from id="banner"
const bannerP = document.querySelector('#banner p')
console.log(bannerP)
//bannerP.innerHTML = " blablabla" + slides[2].tagLine // test
bannerP.innerHTML = slides[0].tagLine // test


// Get span element from id="banner"
const bannerSPAN = document.querySelector('#banner span')
console.log(bannerSPAN)
//bannerSPAN.innerHTML = " blablabla" + slides[2].tagLine // test
bannerSPAN.innerHTML = slides[0].tagLine // test


// decoupe de la string tagLine en 2 sans SPAN
const tagLine = slides[0].tagLine
console.log(tagLine) // infos
const match = tagLine.match(/(.*?)<span>(.*?)<\/span>/)
const textAvantSpan = match[1]
console.log(textAvantSpan) // infos
const textApresPremierSpan = match[2]
console.log(textApresPremierSpan) // infos

// Create tab ONLY .dot for indexing
const dotAll = document.querySelectorAll('.dot');
console.log(dotAll) // infos

// Init ref to index [0]  class(' dot dot_selected)
dotAll[p].classList.add('dot_selected');
console.log(dotAll) // infos

// Left-arrow - calcul index p
arrowLeft.addEventListener('click', () => {
	p = p - 1
	if(p == - 1) {
		p = slides.length - 1
	}
	changeImgBall()
}
)

// Right-arrow - calcul index p
arrowRight.addEventListener('click', () => {
	p = p + 1
	if(p == slides.length) {
		p = 0
	}
	changeImgBall()
}
)


const changeImgBall = () => {
	console.log('click sur arrow') // infos
	console.log('valeur de p = ' + p) // infos
	const slide = slides[p] // infos
	console.log("Image:", slides[p].image) // infos
	console.log("Tagline:", slides[p].tagLine) // infos

	// Remove 'dot_selected' class from all dots
    dotAll.forEach(dot => dot.classList.remove('dot_selected'));
	console.log(dotAll) // infos
	// Select a dot with [p] and add 'dot_selected' class
	dotAll[p].classList.add('dot_selected');
	console.log(dotAll) // infos

	// Change the 'image' from array objects
	bannerImg.src = "./assets/images/slideshow/" + slides[p].image

	// Change the 'tagLine' from array objects
	// Modify the content using textContent
	/*bannerP.textContent = slides[p].tagLine*/
	const text = slides[p].tagLine
	console.log('tagLine: ' + text) // infos
	
	// get 2 strings from array slides -> tagLine
	const tagLine = slides[0].tagLine
	console.log(tagLine) // infos
	const match = tagLine.match(/(.*?)<span>(.*?)<\/span>/)
	const textAvantSpan = match[1]
	console.log(textAvantSpan) // infos
	const textApresPremierSpan = match[2]
	console.log(textApresPremierSpan) // infos

	// update p element from id="banner"
	bannerP.innerHTML = slides[p].tagLine

	// update span element from id="banner"
	bannerSPAN.innerHTML = slides[p].tagLine





}
