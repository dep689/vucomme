const JSON_PATH = '../../comment.json'
const LIMIT = 5

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

async function addMessageAsync(target, message) {
    await wait(600)
    for (const i of message) {
        await wait(60)
        target.textContent += i
    }
    return target
}

function addComment(message) {
    const container = document.getElementById("comment-container")
    const template  = document.getElementById("comment-template")
    const clone = template.content.cloneNode(true)
    const target = clone.querySelector(".message")
    const cursor = clone.querySelector(".cursor")
    
    addMessageAsync(target, message)
    .then(() => { cursor.classList.add("hidden") })
    
    container.prepend(clone)
}

async function vugpt() {
  OneSDK.setup({ jsonPath: JSON_PATH, commentLimit: LIMIT })

  const cache = new Set()

  OneSDK.subscribe({
    action: 'comments',
    callback: (comments) => {
      comments.forEach((comment, index) => {
        if (comment.data.hasGift) return
        if (cache.has(comment.data.id)) return

        addComment(html.unescape(comment.data.comment))
        cache.add(comment.data.id)
      })
    }
  })

  OneSDK.connect()
}
OneSDK.ready().then(vugpt)
