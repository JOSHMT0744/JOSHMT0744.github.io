/* eslint-disable no-tabs */
/* eslint-disable no-useless-catch */
/* eslint-disable no-undef */
/* Description: Custom JS file */

// My Custom JS
async function listeners () {
   await frontTextUpdate();
   setInterval(async () => { // Check the time every 50 seconds
      await frontTextUpdate();
   }, 5000);

   document.querySelector('.navbar-toggler').addEventListener('click', () => {
      document.querySelector('.offcanvas-collapse').classList.toggle('open');
 });

 // Navbar on mobile
const elements = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');

for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener('click', async () => {
		document.querySelector('.offcanvas-collapse').classList.toggle('open');
	});
}
}

   async function frontTextUpdate () {
      const welcomeTextMain = document.querySelector('#welcomeTextMain');
      const today = new Date();
      const currHour = today.getHours(); // https://stackoverflow.com/questions/7188145/call-a-javascript-function-every-5-seconds-continuously
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
			const urlObj = new URL('https://www.josh-thompson.co.uk/api/email/sendEmail');
			console.log(urlObj.pathname);
			console.log(formDataEntries);
			const returnedData = await fetch(urlObj.pathname, {
				method: 'POST',
				headers: {
					'content-Type': 'application/json'
				},
				body: formDataEntries
			});
			console.log('done');
			console.log(await returnedData.json());
		} catch (error) {
			throw (error);
		}
	});
}

document.addEventListener('DOMContentLoaded', listeners);
document.addEventListener('DOMContentLoaded', formListeners);
