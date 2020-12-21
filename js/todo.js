(function(){
	function todo(){
		var html = document.querySelector('html')
		var userAgent = navigator.userAgent
		html.className = "";
		if(userAgent.indexOf("iPhone")!=-1){
			//console.log(iphone)
			html.classList.add("iphone")
		}else if(userAgent.indexOf("Android")!=-1){
			//console.log(iphone)
			html.classList.add("android")
		}else if(userAgent.indexOf("iPad")!=-1){
			//console.log(iphone)
			html.classList.add("ipad")
		}else{
			html.classList.add("pc")
		}
		
		if(window.innerWidth<640){
			html.classList.add('lt640');
			html.classList.add("lt960")
			html.classList.add("lt1200")
		}else if(window.innerWidth<960){
			html.classList.add("lt960")
			html.classList.add("lt1200")
			html.classList.add("gt640")
		}else if(window.innerWidth<1200){
			html.classList.add("gt960")
			html.classList.add("lt1200")
			html.classList.add("gt640")
		}else{
			html.classList.add("gt960")
			html.classList.add("gt1200")
			html.classList.add("gt640")
		}
		
		var screenWidth = window.innerWidth;
		var danwei = screenWidth/3.75;
		var html = document.querySelector("html")
		html.style.fontSize = danwei + 'px';
		
	}
	todo()
	
	window.onresize = function(){
		todo()
	}
})()
			
			

