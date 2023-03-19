/************************************* SCROLLING ************************/
const postDiv = document.querySelector('#post')
const alert = document.querySelector('#alert')
const alertBorder = document.querySelector('#alert-border')
const mainContent = document.querySelector('#global')

postDiv.addEventListener('scroll',()=>{
    if (postDiv.scrollTop> 0){
        alert.style.display = "block"
        postDiv.style.overflowY = "hidden"
        mainContent.style.filter = "blur(4px)"
        navbar.style.filter = "blur(4px)"
    }
})

window.onclick = function(event) {
    if (event.target == alert){
        alert.style.display = "none"
        postDiv.style.overflowY = "auto"
        postDiv.scrollTo(0,0)
        mainContent.style.filter = ""
        navbar.style.filter = ""
    }
}
/************************************* SCROLLING ************************/
