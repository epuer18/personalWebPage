var first = true;

function make_img() {
  let stickfig = document.getElementById("stickfig");
    
    setInterval(() => {stickfig.style.opacity =  stickfig.style.opacity ? (parseFloat(stickfig.style.opacity) + 0.01) : 0.05} , 300);
  
}

window.onscroll = () => {
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    if (first) {
      first = false;
      make_img();
    }
  }
};
