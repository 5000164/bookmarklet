// ニコニコ動画のリンクを生成する

(() => {
  const title = document.querySelector(".VideoTitle").innerText
  const linkTag = `<li><a href="${location.href}">${title}</a></li>`

  const textarea = document.createElement("textarea")
  textarea.textContent = linkTag
  const body = document.getElementsByTagName("body")[0]
  body.appendChild(textarea)
  textarea.select()
  document.execCommand("copy")
  body.removeChild(textarea)
})()
