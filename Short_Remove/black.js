async function stop(){
	await new Promise(r => setTimeout(r, 500));
	document.getElementsByClassName("style-scope ytd-rich-section-renderer")[2].remove();
}

stop();
