fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        console.log(postsArr)
        const postsEl = document.getElementById('posts')
        postsArr.forEach((item) => {
          postsEl.innerHTML += `
          <h1>${item.title}</h1>
          <p>${item.body}</p>`
        })
    })