const app = require('./app.js');

const hostname = 'josh-thompson.co.uk';
const port = 21;

app.listen (hostname, () => {
   console.log(`Server running at http://${hostname}/`);
});
