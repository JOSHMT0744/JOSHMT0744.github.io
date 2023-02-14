/* Description: Custom JS file */

// My Custom JS
async function listeners () {
   await frontTextUpdate();
   const interval = setInterval(async () => { // Check the time every 50 seconds
      await frontTextUpdate();
   }, 5000);

   document.querySelector(".navbar-toggler").addEventListener("click", () => {
      document.querySelector(".offcanvas-collapse").classList.toggle("open");
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
   
      if (currHour < 12) {
         updatedText = 'Good morning, I\'m Josh!';
      } else if (currHour >= 18) {
         updatedText = 'Good evening, I\'m Josh!';
      } else {
			updatedText = 'Good afternoon, I\'m Josh!';
		}
   
      welcomeTextMain.innerHTML = updatedText;
   }

async function formListeners () {
	const form = document.querySelector('#contactForm');

	form.addEventListener('submit', async (event) => {
		event.preventDefault();
		const formData = new FormData(form);
		const formDataEntries = JSON.stringify(Object.fromEntries(formData));
		try {
			const returnedData = await fetch('https://www/josh-thompson.co.uk/sendEmail', {
				method: 'POST',
				headers: {
					'content-Type': 'application/json'
				},
				body: formDataEntries
			});
			// console.log(await returnedData.text());
		} catch (error) {
			throw (error);
		}
	
	})
	
}


document.addEventListener('DOMContentLoaded', listeners);
document.addEventListener('DOMContentLoaded', formListeners);