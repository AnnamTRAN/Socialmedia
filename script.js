/*************************************************** FILTER **************************************************/
const tags = document.querySelectorAll('.tag')
let slctdElements = new Set()   /*set for displayed tags only*/
let hiddenElements  = new Set() /*set for hidden tags only*/

const filter = (event) => {
    const evnt = event.target
     
    if (evnt.checked){ /*checked*/
        tags.forEach(tag =>{ /*verify each post's tag if match with checkbox tag*/
            if (evnt.getAttribute('data-value') === tag.getAttribute('data-value')){ /*if same value add to slctedElements */
                hiddenElements.delete(tag)
                slctdElements.add(tag)
            }
            else if(slctdElements.has(tag)){ /*if another checkbox checked show his tags*/
                tag.style.display = "block"
            }
            else { /*no matching tags*/
                hiddenElements.add(tag)
            }
        })
    }

    else if(!evnt.checked){ /*unchecked*/
        tags.forEach(tag =>{ 
            if (evnt.getAttribute('data-value') === tag.getAttribute('data-value')){ /*if uncheck and other checkboxes checked -> hide*/
                slctdElements.delete(tag)
                hiddenElements.add(tag)
                console.log(slctdElements)
            }
        })
    }

    slctdElements.forEach(element =>{
        element.style.display = "block"
        element.style.backgroundColor = "#FFB6C1"
    })

    hiddenElements.forEach(element =>{
        element.style.display = "none"
    })

    if (slctdElements.size === 0){ /* "reset" posts display*/
        hiddenElements.forEach(element =>{
            element.style.display = "block"
            element.style.backgroundColor = ""
        })   
        hiddenElements.clear()
    }
}

const Uncheck = () => {
    const filters = document.querySelectorAll('input[type="checkbox"]');
    slctdElements.clear()
    hiddenElements.clear()

    tags.forEach(tag =>{
        tag.style.display = "block"            
        tag.style.backgroundColor = ""
    })

    filters.forEach(filter =>{
        filter.checked = false
    }) 
}
/*************************************************** FILTER **************************************************/



/*************************************************** POST **************************************************/
const removeDiv = document.querySelectorAll('.remove')
const removeButtons = document.querySelectorAll('.remove-button')
const cancelButtons = document.querySelectorAll('.no')
const navbar = document.getElementById('navbar')

removeButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        button.nextElementSibling.style.display = "block"
    })
})

cancelButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        button.closest('.remove').style.visibility = "hidden"
    })
})

removeDiv.forEach(div =>{
    div.addEventListener('click',(event)=>{
        if(event.target.style.display === "block"){
            event.target.style.visibility = "hidden"
        }
    })
})

/************** swipe mobile ver ***************/
let downX = null
let downY = null

const display = () =>{
    navbar.style.transform = "translateX(0%)"
}

navbar.addEventListener('touchstart',(ev)=>{
    downX = ev.touches[0].clientX
    downY = ev.touches[0].clientY
})

navbar.addEventListener('touchmove',(ev)=>{
    let upX = ev.touches[0].clientX
    let upY = ev.touches[0].clientY
    let diffX = downX - upX
    let diffY = downY - upY
    if(!downX || !downY){
        return
    }

    if(Math.abs(diffX) > Math.abs(diffY)){
        if (diffX > 0){
            navbar.style.transform = "translateX(-100%)"
        }
        else{
            navbar.style.transform = "tranlateX(0%)"
        }
    }
    downX = null;
    downY = null;
})

/************** swipe mobile ver ***************/




/*************************************************** POST **************************************************/

/************************************* PIC PREVIEW BOOSTRAP ************************/

const preview = (event) =>{
    const frame = document.getElementById('frame')
    frame.src = URL.createObjectURL(event.target.files[0])
    frame.style.display = "block"
}

/************************************* PIC PREVIEW BOOSTRAP ************************/


/*************************************************** MODAL **************************************************/
const modal = document.getElementById('modal')
const btn = document.getElementById('modal-link')

btn.onclick = function() {
    modal.style.display = "block"
  }

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none"
    }
    else if (event.target == alert){
        alert.style.display = "none"
        postDiv.style.overflowY = "auto"
        postDiv.scrollTo(0,0)
        mainContent.style.filter = ""
        navbar.style.filter = ""
    }
}

/************** post + reload page ***************/

const submit = document.getElementById('submit')

submit.addEventListener('click',()=>{
    localStorage.clear()
    location.reload()
})

/************** post + reload page ***************/

/************** locastorage post ***************/
const msgstore = document.getElementById('textarea')
msgstore.value = localStorage.getItem('txt')

msgstore.addEventListener('keyup',(event) =>{
    txt = event.target.value
    localStorage.setItem('txt',txt)
})
/************** locastorage post ***************/



/*************************************************** MODAL **************************************************/



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
/************************************* SCROLLING ************************/



