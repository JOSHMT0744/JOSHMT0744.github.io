/* Description: Custom JS file */

/* Navigation*/
// Collapse the navbar by adding the top-nav-collapse class
window.onscroll = async function () {
	await scrollFunction();
	await scrollFunctionBTT(); // back to top button
};

window.onload = async function () {
	await scrollFunction();
};

async function scrollFunction() {
	if (document.documentElement.scrollTop > 30) {
		document.getElementById("navbar").classList.add("top-nav-collapse");
	} else if ( document.documentElement.scrollTop < 30 ) {
		document.getElementById("navbar").classList.remove("top-nav-collapse");
	}
}

// Hover on desktop
async function toggleDropdown(e) {
	const _d = await e.target.closest(".dropdown");
	let _m = document.querySelector(".dropdown-menu", _d);

	setTimeout(
		async function () {
		const shouldOpen = await _d.matches(":hover");
		_m.classList.toggle("show", await shouldOpen);
		await _d.classList.toggle("show", await shouldOpen);

		await _d.setAttribute("aria-expanded", await shouldOpen);
		},
		e.type === "mouseleave" ? 300 : 0
	);
}


/* Card Slider - Swiper */
let cardSlider = new Swiper('.card-slider', {
	autoplay: {
		delay: 4000,
		disableOnInteraction: false
	},
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});


/* Back To Top Button */
// Get the button
myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
async function scrollFunctionBTT() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		myButton.style.display = "block";
	} else {
		myButton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
async function topFunction() {
	document.body.scrollTop = 0; // for Safari
	document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}
       // Scroll to top button appear
       document.addEventListener('scroll', async () => {
         const scrollToTop = document.body.querySelector('.scroll-to-top');
         if (document.documentElement.scrollTop > 100) {
             if (!scrollToTopVisible) {
                 await fadeIn(scrollToTop);
                 scrollToTopVisible = true;
             }
         } else {
             if (scrollToTopVisible) {
                 fadeOut(scrollToTop);
                 scrollToTopVisible = false;
             }
         }
     });

// My Custom JS
async function listeners () {
   await frontTextUpdate();
   const interval = setInterval(async () => { // Check the time every 50 seconds
      await frontTextUpdate();
   }, 5000);

   document.querySelector(".navbar-toggler").addEventListener("click", () => {
      document.querySelector(".offcanvas-collapse").classList.toggle("open");
 });

 
	// On click
	document.querySelector(".dropdown").addEventListener("click", async (e) => {
		const _d = await e.target.closest(".dropdown");
		let _m = document.querySelector(".dropdown-menu", await _d);
		if (await _d.classList.contains("show")) {
			_m.classList.remove("show");
			await _d.classList.remove("show");
		} else {
			_m.classList.add("show");
			await _d.classList.add("show");
		}
	});

 // Navbar on mobile
let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", async () => {
		document.querySelector(".offcanvas-collapse").classList.toggle("open");
	});
}
 
}

   async function frontTextUpdate () {
      const welcomeTextMain = document.querySelector('#welcomeTextMain');
      const today  = new Date()
      let currHour =  today.getHours(); // https://stackoverflow.com/questions/7188145/call-a-javascript-function-every-5-seconds-continuously
      let updatedText;
      console.log(currHour);
   
      if (currHour < 12) {
         updatedText = 'Good morning, I\'m Josh!';
      } else {
         updatedText = 'Good afternoon, I\'m Josh!';
      }
   
      welcomeTextMain.innerHTML = updatedText;
   }


document.addEventListener('DOMContentLoaded', listeners);