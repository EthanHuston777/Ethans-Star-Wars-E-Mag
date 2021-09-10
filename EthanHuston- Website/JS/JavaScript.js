//-----------------------------------------------------
//CURTAIN MENU
function openNav() {
	document.getElementById("curtain-nav").style.width = "100%";			
}

function closeNav() {
	document.getElementById("curtain-nav").style.width = "0%";			
}		


//Read More/less function number 1
function expandText1() {
	//Find the expandBtn1 element on HTML file
	let expandBtn1 = document.getElementById("expandBtn1");
	
	//Check whether to expand or collapse text based on the text display on the button
	if (expandBtn1.value.toLowerCase() == "more") {
		document.getElementById("detailed1").style.display = "block";
		expandBtn1.value = "LESS";
		expandBtn1.textContent = "LESS";
	} else {
		document.getElementById("detailed1").style.display = "none";
		expandBtn1.value = "MORE";
		expandBtn1.textContent = "MORE";
	}	
}	

//Read More/less function number 2
function expandText2() {
	//Find the expandBtn2 element on HTML file
	let expandBtn2 = document.getElementById("expandBtn2");
	
	//Check whether to expand or collapse text based on the text display on the button
	if (expandBtn2.value.toLowerCase() == "more") {
		document.getElementById("detailed2").style.display = "block";
		expandBtn2.value = "LESS";
		expandBtn2.textContent = "LESS";
	} else {
		document.getElementById("detailed2").style.display = "none";
		expandBtn2.value = "MORE";
		expandBtn2.textContent = "MORE";
	}	
}	

function submit() {
	document.getElementById("myForm").submit();	
}