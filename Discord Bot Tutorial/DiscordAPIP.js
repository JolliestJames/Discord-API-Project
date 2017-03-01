function mouseoverHandler(e)
{
	if(e.target.className === "button")
	{
		e.target.classList.add('hovering');
	}
}

function mouseoutHandler(e)
{
	if(e.target.className === "button hovering")
	{
		e.target.classList.remove('hovering');
	}
}

window.addEventListener('mouseover', mouseoverHandler);
window.addEventListener('mouseout', mouseoutHandler);