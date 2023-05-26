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

/************** delete post ***************/
const removeDiv = document.querySelectorAll('.remove')
const removeButtons = document.querySelectorAll('.remove-button')
const cancelButtons = document.querySelectorAll('.no')

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
/************** delete post ***************/

/************** swipe mobile ver ***************/
const navbar = document.getElementById('navbar')
let touchstartX = null
let touchstartY = null

const display = () =>{
    if (navbar.style.transform == "translateX(0%)"){
        navbar.style.transform = "translateX(-100%)"
    } else{
        navbar.style.transform = "translateX(0%)"
    }
}

navbar.addEventListener('touchstart',(event)=>{
    touchstartX = event.touches[0].clientX /** User touchstart based on X coordinates of browser's window **/
    touchstartY = event.touches[0].clientY /** User touchstart based on Y coordinates of browser's window **/
})

navbar.addEventListener('touchmove',(event)=>{
    let touchendX = event.touches[0].clientX
    let touchendY = event.touches[0].clientY
    let diffX = touchstartX - touchendX
    let diffY = touchstartY - touchendY
    console.log(diffX, diffY)
    if(!touchendX || !touchendY){
        return
    }

    if(Math.abs(diffX) > Math.abs(diffY)){ /** Checks the magnitude of the differences to indicate wether the swipe is horizontal or vertical, which in this case is horizontal **/
        if (diffX > 0){ /** If diffX is greater than 0, the swipe is from right to left **/
            navbar.style.transform = "translateX(-100%)"
        }
        else{
            navbar.style.transform = "tranlateX(0%)"
        }
    }
    touchendX = null;
    touchendY = null;
})

/************** swipe mobile ver ***************/

/************** hover effect keyframes ***************/
const title = document.querySelector('h1')
tags.forEach(tag => {
    let style = window.getComputedStyle(tag)
    let borderColor = style.getPropertyValue('border-left-color')
    tag.addEventListener('mouseover', () =>{
        tag.style.animation = "hover 500ms ease-in-out forwards"
        title.style.color = borderColor
    })
    tag.addEventListener('mouseout', () =>{
        tag.style.animation = "notHover 500ms ease-in-out forwards"
        title.style.color = "whitesmoke"
    })
})
/************** hover effect keyframes ***************/

/*************************************************** POST **************************************************/

/************************************* PIC PREVIEW BOOSTRAP ************************/

const preview = (event) =>{
    const frame = document.querySelector('.frame')
    frame.src = URL.createObjectURL(event.target.files[0])
    frame.style.display = "block"
}

const picFile = document.getElementById('inputGroupFile01')
const labelFile = document.querySelector('.label-file')
let interval

const blinking = () => {
    if (labelFile.style.backgroundColor === "red"){
        labelFile.style.backgroundColor = "rgba(255, 0, 0, 0.2)"
    } else {
        labelFile.style.backgroundColor = "red"
    }
}



picFile.addEventListener('invalid', () =>{
    if (!interval){
        interval = setInterval(blinking, 100)
    }
    setTimeout(() =>{
        clearInterval(interval)
        labelFile.style.backgroundColor = "red"
        interval = null
    },1500)
})

picFile.addEventListener('change', () =>{
    labelFile.style.backgroundColor = "green"
})
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

/************** localstorage clear on post ***************/
const clear = document.getElementById('submit')
clear.addEventListener('click', () =>{
    localStorage.removeItem('txt')
})
/************** localstorage clear on post ***************/

/************** locastorage post ***************/
const msgstore = document.getElementById('textarea')
msgstore.value = localStorage.getItem('txt')

msgstore.addEventListener('keyup',(event) =>{
    txt = event.target.value
    localStorage.setItem('txt',txt)
})
/************** locastorage post ***************/




/*************************************************** MODAL **************************************************/
