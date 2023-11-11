function search_games() { 
	let input = document.getElementById('content').value 
	input=input.toLowerCase(); 
	let x = document.getElementsByClassName('content'); 
	
	for (i = 0; i < x.length; i++) { 
		if (!x[i].innerHTML.toLowerCase().includes(input)) { 
			x[i].style.display="none"; 
		} 
	} 
} 
