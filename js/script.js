var first = true;

function make_img(){
    let stickfig = document.getElementById('stickfig')
    for (let i = 0; i < 1; i+=0.05) {
        setTimeout(() => {stickfig.style.opacity = i; }, 250)
        console.log(i)
      }
 
}

window.onscroll = () => {
    if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight){
        if(first){
            first = false;
            make_img();
        }
    }
}