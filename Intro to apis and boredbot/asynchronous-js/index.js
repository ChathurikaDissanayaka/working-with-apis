console.log("The first console log")

fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => console.log(data))

console.log("The second console log")

for (let i = 0; i < 100; i++) {
    console.log("I'm inside the for loop")
}

// output
// The first console log
// The second console log X 100
// {
//     message: 'https://images.dog.ceo/breeds/rottweiler/n02106550_11728.jpg',
//     status: 'success'
// }