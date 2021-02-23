// URL を Markdown 形式でクリップボードにコピーする

(() => {
  const textarea = document.createElement("textarea")
  textarea.textContent = `[${document.title}](${document.URL})`
  const body = document.getElementsByTagName("body")[0]
  body.appendChild(textarea)
  textarea.select()
  document.execCommand("copy")
  body.removeChild(textarea)
})()
