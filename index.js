const axios = require('axios');
const cheerio = require('cheerio');
console.log(process.argv)
let url = '';
if (process.argv[2]) {
    url = process.argv[2];
} else {
    url = 'https://www.beatport.com/genre/tech-house/11/top-100';
}

let getTracks = function(callback) {
    let tracks = [];
    axios.get(url)
        .then(response => {
            const $ = cheerio.load(response.data);
            $('.track').each((i, track) => {
                tracks.push({
                    'id': track.attribs['data-ec-id'],
                    'title': track.attribs['data-ec-name'],
                    'artist': track.attribs['data-ec-d1'],
                    'genre': track.attribs['data-ec-d3']
                });
            })
            callback(tracks);
        })
        .catch(error => {
            console.log(error)
        })
}

getTracks(function(tracks) {
    console.log(tracks);
});