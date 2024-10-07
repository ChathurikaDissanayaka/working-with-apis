fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        const postsEl = document.getElementById('posts')
        postsArr.forEach((item) => {
          postsEl.innerHTML += `
          <div class='post'>
            <h2>${item.title}</h2>
            <p>${item.body}</p>
            <hr>
          </div>`
        })
        document.getElementById('newPost').addEventListener('submit', function(e){
            e.preventDefault();
            const title = document.getElementById('title').value
            const body = document.getElementById('body').value

            const post = {
                title: title,
                body: body
            }

            console.log(post)
        })
    })