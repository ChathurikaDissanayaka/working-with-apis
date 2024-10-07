const postsEl = document.getElementById('posts')

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        postsArr.forEach((item) => {
          postsEl.innerHTML += `
          <div class='post'>
            <h2>${item.title}</h2>
            <p>${item.body}</p>
            <hr>
          </div>`
        })
    })

    document.getElementById('newPost').addEventListener('submit', function(e){
        e.preventDefault();

        const titleEl = document.getElementById('title')
        const bodyEl = document.getElementById('body')

        const title = titleEl.value
        titleEl.value = ""
        const body = bodyEl.value
        bodyEl.value = ""

        const post = {
            title: title,
            body: body
        }

        const options = {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                "Content-Type": "application/json"
            }
        }
        
        fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
            .then(res => res.json())
            .then(post => {
                postsEl.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <hr />
                    ${postsEl.innerHTML}
                `
            })
    })