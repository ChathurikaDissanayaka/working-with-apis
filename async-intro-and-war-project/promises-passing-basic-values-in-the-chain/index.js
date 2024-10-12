/**
 * Time to be curious!
 * 
 * What would happen if you didn't return `res.json()` 
 * from the first .then block?
 * 
 * What would the next .then() callback receive as its 
 * parameter if you returned something totally different??
 */

/**
 * Challenge:
 * 
 * pass the string "World" down to a 3rd .then() block
 * and log it to the console inside the body of this new
 * 3rd .then() block
 */

fetch("https://apis.scrimba.com/bored/api/activity")
    .then(function(res) {
        return "Hello"
    })
    .then(function(whatever) {
        console.log(whatever)
        return "World"
    })
    .then(function(another) {
        console.log(another)
    })