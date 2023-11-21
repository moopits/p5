const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


function changeImg() {
	// Sélectionnez l'élément img par son ID (getElementById("image");)
	const imageElement = document.querySelector(arrow .arrow_left);  

	// Modifiez l'attribut src de l'élément img pour changer l'image
	imageElement.src = "slide1.jpg";

	// Vous pouvez également modifier d'autres attributs si nécessaire
	imageElement.alt = "Slide 1";
}

// Sélectionnez le bouton par sa classe
const monBouton = document.querySelector('.mon-bouton');

// Ajoutez un gestionnaire d'événement de clic au bouton
monBouton.addEventListener('click', function() {
    alert('Bouton cliqué !');
});


/*
<button onclick="changerDiapo()">Changer de diapo</button>

document.getElementById('leftButton').addEventListener('click', function() {
    var container = document.getElementById('carouselItems');
    container.scrollLeft -= 300; // Adjust the value to match your item width
});

document.getElementById('rightButton').addEventListener('click', function() {
    var container = document.getElementById('carouselItems');
    container.scrollLeft += 300; // Adjust the value to match your item width
});
*/