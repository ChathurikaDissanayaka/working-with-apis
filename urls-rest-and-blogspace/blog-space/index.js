const postsEl = document.getElementById('posts')
const form = document.getElementById("new-post")
const titleEl = document.getElementById('title')
const bodyEl = document.getElementById('body')

let postsArray = []

function renderPosts(){
    let html = ""

    postsArray.forEach((item) => {
        html += `
        <div class='post'>
          <h2>${item.title}</h2>
          <p>${item.body}</p>
          <hr>
        </div>`
      })

      postsEl.innerHTML = html
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0, 5)
        renderPosts()
    })

form.addEventListener('submit', function(e){
    e.preventDefault();

    const title = titleEl.value
    const body = bodyEl.value

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
            postsArray.unshift(post)
            renderPosts()
            form.reset()
    })
})