"use strict";

// ===================================================
//   JS-Vertiefung – Project Optimalgewicht-Rechner
// ===================================================

console.log("%c JS-Vertiefung – Project Optimalgewicht-Rechner", "color: tomato");

// ===================================================
//    	 		Berechnung des Idealgewichts
// ===================================================

const idealWeight = () => {
	// Input Height
	const inputHeight = Number(document.querySelector("#height").value);

	// Input Age
	const inputAge = Number(document.querySelector("#age").value);

	// Radio Buttons - wide/slim
	let rdBtnPhysique = document.querySelectorAll("input[name='physique']");

	if (inputHeight === 0 || inputAge === 0 ){
		return false;
	} else {
		if (rdBtnPhysique[0].checked) {
			// Formel für Menschen mit einem eher breiten Körperbau:[(Körpergröße in cm - 100) + (Alter/ 10)] x 0,9 x 1,1
	
			const broadPhysique =
				(((inputHeight - 100) + (inputAge / 10)) * 0.9 * 1.1).toFixed(2);
			return broadPhysique;
	
		} else if (rdBtnPhysique[1].checked) {
			// Formel für Menschen mit einem zierlichen und schmalen Körperbau:[(Körpergröße in cm - 100) + (Alter/ 10)] x 0,9 x 0,9
	
			const slenderPhysique =
			(((inputHeight - 100) + (inputAge / 10)) * 0.9 * 0.9).toFixed(2);
			return slenderPhysique;
		}
	}
};


// ===================================================
//     	  				 Ausgabe 
// ===================================================

const btnCalc = document.querySelector("#btnCalc");

// Button Klick-Function für idealWeight() Ausgabe
btnCalc.addEventListener("click", (event) => {
	event.preventDefault();

	const output = document.querySelector('#output');
	output.style.display = 'block';
	// Error-Handling
	if (idealWeight() === false ) {
		output.textContent = 'Bitte füllen Sie alle Felder aus!';
		return false;
	} else {
		// Ausgabe von Idealgewicht
		output.textContent = `Dein Idealgewicht ist ${idealWeight().replace('.',',')} kg.`;
	}
});
