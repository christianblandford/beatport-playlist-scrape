const axios = require('axios');
const cheerio = require('cheerio');

let getTracks = function(url, callback) {
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

module.exports = getTracks;