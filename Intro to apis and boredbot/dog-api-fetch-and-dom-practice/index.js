/**
Challenge:

1. Fetch a random image from the Dog API again 
(https://dog.ceo/api/breeds/image/random)

2. Access the DOM and insert the URL you got from the
API as an image `src` property (probably easiest if 
you create the image completely here in the JS and add 
it as the innerHTML of another element on the DOM)
*/

async function getData() {
    const url = "https://dog.ceo/api/breeds/image/random";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      // console.log(json.message);
      document.getElementById("img").innerHTML = `<img src=${json.message}>`
    } catch (error) {
      console.error(error.message);
    }
  }
  
  getData()
  
//   fetch("https://dog.ceo/api/breeds/image/random")
//   .then(response => response.json())
//   .then(data => {
//       console.log(data)
//       document.getElementById("img").innerHTML = `
//           <img src="${data.message}" />
//       `
//   })  