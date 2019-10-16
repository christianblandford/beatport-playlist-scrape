# beatport-scrape
 Scrapes tracks, artists, and genres from a beatport playlist URL

# Usage:
```
const getTracks = require(beatport-playlist-scrape)

getTracks(url)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })
```

# Example Output:
```
[{ id: '12630900',                                                                                                         title: 'Sahara',                                                                                                        artist: 'MD Project',                                                                                                   genre: 'Deep House' },                                                                                                { id: '12630901',                                                                                                         title: 'Biosphere',                                                                                                     artist: 'Widow Tongue',                                                                                                 genre: 'Deep House' },                                                                                                { id: '12630991',                                                                                                         title: 'Loop Think',                                                                                                    artist: 'Level Of Encore',                                                                                              genre: 'Deep House' }]
```
