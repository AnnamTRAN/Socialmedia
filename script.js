/*************************************************** FILTER **************************************************/
const tags = document.querySelectorAll('.tag')
let slctdElements = new Set()   /*set for displayed tags only*/
let hiddenElements  = new Set() /*set for hidden tags only*/
const root = document.querySelector(':root')

const filter = (event) => {
    const evnt = event.target
    let label = evnt.nextElementSibling.closest('label')
    let computelabel = window.getComputedStyle(label)
    let labelColor = computelabel.getPropertyValue('color')
    
    if (evnt.checked){ /*checked*/
    tags.forEach(tag =>{ /*verify each post's tag if match with checkbox tag*/
            console.log(labelColor)
            if (evnt.getAttribute('data-value') === tag.getAttribute('data-value')){ /*if same value add to slctedElements */
                hiddenElements.delete(tag)
                slctdElements.add(tag)
                root.style.setProperty('--color-grey', labelColor)
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
            }
        })
    }

    slctdElements.forEach(element =>{
        element.style.display = "block"
    })

    hiddenElements.forEach(element =>{
        element.style.display = "none"
    })

    if (slctdElements.size === 0){ /* "reset" posts display*/
        root.style.setProperty('--color-grey', 'whitesmoke')
        hiddenElements.forEach(element =>{
            element.style.display = "block"
        })   
        hiddenElements.clear()
    }
}

const Uncheck = () => {
    const filters = document.querySelectorAll('input[type="checkbox"]');
    slctdElements.clear()
    hiddenElements.clear()
    root.style.setProperty('--color-grey', 'whitesmoke')

    tags.forEach(tag =>{
        tag.style.display = "block"            
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
        button.closest('.remove').style.display = "none"
    })
})

removeDiv.forEach(div =>{
    div.addEventListener('click',(event)=>{
        if(event.target.style.display === "block"){
            event.target.style.display = "none"
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
    const frame = document.querySelector('.frame')
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
}
/************** post + reload page ***************/

const formsubmit = document.getElementsByClassName('modal-content')

formsubmit.addEventListener('onsubmit',()=>{
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
