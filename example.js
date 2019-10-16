const getTracks = require('./index.js');

let url = '';
if (process.argv[2]) {
    url = process.argv[2];
} else {
    url = 'https://www.beatport.com/genre/tech-house/11/top-100';
}

getTracks(url, function(data) {
    console.log(data);
})