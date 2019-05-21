// ニコニコ動画のマイリストを HTML にする

(() => {
  const getSongs = (html) => html
    .replace(/^(?!.*id="SYS_page_items").*$/gm, "") // 動画を含んでいる行だけ取り出す
    .replace(/class="SYS_box_item MylistItem"/g, "\n") // 動画ごとに行を分ける
    .replace(/<wbr>/gm, "") // wbt タグが邪魔になるので取り除く
    .replace(/.*<h5.*?href="\/watch\/(.*?)".*?>(.*?)<.*/g, "$1,$2") // 動画のタイトルとリンクを取り出す
    .replace(/.*ul.*/g, "") // 必要ない行を削除する
    .replace(/^[\n\r]/gm, "") // 空行を削除する
    .split("\n")
    .filter(v => v.length > 0)
    .map(v => v.split(","))

  const songs = getSongs(document.body.innerHTML).map(v => `<li><a href="http://www.nicovideo.jp/watch/${v[0]}">${v[1]}</a></li>`).join("\n")
  const d = window.open().document
  d.writeln(`<textarea rows=60 cols=80><html>\n<body>\n<ul>\n${songs}\n</ul>\n</body>\n</html>\n</textarea>`)
  d.close()
})()
