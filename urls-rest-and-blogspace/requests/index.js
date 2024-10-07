fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
  method: "POST",
  body: JSON.stringify({
      title: "Buy Milk",
      completed: false
  }),
  headers: {
      "Content-Type": "application/json"
  }
})
  .then(res => res.json())
  .then(data => console.log(data))