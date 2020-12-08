const CACHE ='AdvProg'
const FILES = ['/JS_AdvProg/Classwork7/database.html', '/JS_AdvProg/HW1/poissontable.html', '/JS_AdvProg/HW2/database_hw2.html', '/JS_AdvProg/Classwork6/cw6.html','https://github.com/Seymakotan/JS_AdvProg/']

function installCB(e) { 
  e.waitUntil(
    caches.open(CACHE)
    .then(cache => cache.addAll(FILES))
    .catch(console.log)
  )
}
self.addEventListener('install', installCB)

function save(req, resp) {
  return caches.open(CACHE)
  .then(cache => {
    cache.put(req, resp.clone());
    return resp;
  })
  .catch(console.log)
}
function fetchCB(e) { //fetch first
  let req = e.request
  console.log('AdvProg', req.url);
  e.respondWith(
    fetch(req).then(r2 => save(req, r2))
    .catch(() => { return caches.match(req).then(r1 => r1) })
  )
}
self.addEventListener('fetch', fetchCB)