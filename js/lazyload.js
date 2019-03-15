const imgs = document.querySelectorAll('.my-photo')

function checkImg() {
  
  imgs.forEach((img)=>{
    if(inSight(img)){
      loadImg(img)
    }
  })
}

function loadImg(el) {
  if (!el.src) {
    const source = el.dataset.src
    el.src = source
  }
}

function inSight(el){
  const bound = el.getBoundingClientRect()
  const height = window.innerHeight

  return bound.top < height
}

window.onscroll = checkImg