const sileder = document.querySelector('.sileder'),
	  container = document.querySelector(".container"),
	  controllir = document.querySelector(".controllir"),
	  active = document.querySelector(".active"),
	  loader = document.querySelector(".loader"),
	  width = sileder.offsetWidth;

function positon(event){
	if(event.target.dataset.line == 0){
		sileder.style.transform = `translateX(0px)`;
		active.style.top = "0px";
		container.style.background = '#fbec37';

	}
	else if(event.target.dataset.line == 1){
		sileder.style.transform = `translateX(-600px)`;
		active.style.top = "80px";
		container.style.background = '#3761fb';
	}
	else if(event.target.dataset.line == 2){
		sileder.style.transform = `translateX(-1200px)`;
		active.style.top = "160px";
		container.style.background = '#37fb7c';
	}
	else{
		sileder.style.transform = `translateX(-1800px)`
		active.style.top = "240px";
		container.style.background = '#fb3737';
	}
	
}

function loaders(){
	setTimeout(()=>{
		loader.style.opacity = 0;
		setTimeout(()=>{
			loader.style.display = "none";
		}, 3000)
	}, 2000)
}
window.addEventListener("DOMContentLoaded", ()=>{
	loaders();
	controllir.addEventListener("click",positon);
})

