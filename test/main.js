(function(params) {
  var event = function(event) {
    console.log('event triggered')
    var url = new URL(window.location.href)
    url.searchParams.append('hoge', 'fuga')
    event.target.href = url.href
  }
  window.addEventListener("click", event, false)
  window.top.addEventListener("click", event, false)
})({
  // TODO parameters
})
