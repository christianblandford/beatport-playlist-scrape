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
