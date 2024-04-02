script.js
function calculate(){
	let Weight = document.getElementById('weight').value;
	let Height = document.getElementById('height').value;
	let Age = document.getElementById('age').value;
	let metreheight = Height/100;
	let bmi = Weight/(metreheight*metreheight);
	bmi.toFixed(1);
	console.log(bmi)
	let result = document.getElementById("demo");
	if(Age==="" ){
		alert("this should not be empty")
	result.innerHTML = "";
	}

	switch(true){
		case bmi < 18.5:
		 result.innerHTML= "Your Bmi status is " + bmi + "and it is under weight";
		 console.log(bmi)
		 break;
		 case bmi > 18.5 && bmi < 24.9:
		 result.innerHTML="Your Bmi status is " + bmi + "and it is healthy weight";
		 break;
		 case bmi > 25 && bmi < 29.9:
		 result.innerHTML = "Your Bmi status is " + bmi + "and it is over weight";
		 break;
		 case bmi > 30:
		 result.innerHTML = "Your Bmi status is " + bmi + "and it is Obesity";
		 break;
		 default:
			result.innerHTML = "out of range";
	}
}