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
                console.log(slctdElements)
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
    })

    hiddenElements.forEach(element =>{
        element.style.display = "none"
    })

    if (slctdElements.size === 0){ /* "reset" posts display*/
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
const confirmButtons = document.querySelectorAll('button[value="yes"]')
const cancelButtons = document.querySelectorAll('button[value="no"]')

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

confirmButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        button.parentElement.parentElement.parentElement.parentElement.remove()
    })
})


/*************************************************** POST **************************************************/



/*************************************************** MODAL **************************************************/
const modal = document.getElementById('modal')
const btn = document.getElementById('modal-link')
const span = document.getElementById('close')

btn.onclick = function() {
    modal.style.display = "block"
  }

span.onclick = function() {
    modal.style.display = "none"
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none"
    }
    else if (event.target == alert){
        alert.style.display = "none"
        postDiv.style.overflowY = "auto"
        postDiv.scrollTo(0,0)
    }
}

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
const spanScroll = document.querySelector('#close-alert');
const alert = document.querySelector('#alert');

spanScroll.onclick = function() {
    alert.style.display = "none"
    postDiv.style.overflowY = "auto"
    postDiv.scrollTo(0,0)
}

postDiv.addEventListener('scroll',()=>{
    console.log(postDiv.scrollTop)
    if (postDiv.scrollTop> 120){
        alert.style.display = "block"
        postDiv.style.overflowY = "hidden"
    }
})
/************************************* SCROLLING ************************/
