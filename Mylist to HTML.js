// ニコニコ動画のマイリストを HTML にする

(() => {
  const getSongs = (html) => html
    .replace(/^(?!.*id="SYS_page_items").*$/gm, "") // 動画を含んでいる行だけ取り出す
    .replace(/class="SYS_box_item MylistItem"/g, "\n") // 動画ごとに行を分ける
    .replace(/<wbr>/gm, "") // wbt タグが邪魔になるので取り除く
    .replace(/.*<h5.*?href="\/watch\/(.*?)".*?>(.*?)<.*/g, "$1,separator,$2") // 動画のタイトルとリンクを取り出す
    .replace(/.*<ul.*/g, "") // 必要ない行を削除する
    .replace(/^[\n\r]/gm, "") // 空行を削除する
    .split("\n")
    .filter(v => v.length > 0)
    .map(v => v.split(",separator,")) // 曲名に含まれる文字で切り取らないように separator にはできるだけ曲名と被らないものを使用する

  const songs = getSongs(document.body.innerHTML).map(v => `<li><a href="http://www.nicovideo.jp/watch/${v[0]}">${v[1]}</a></li>`).join("\n")
  const body = window.open().document.getElementsByTagName("body")[0]
  const pre = document.createElement("pre")
  pre.textContent = songs
  body.appendChild(pre)
})()
