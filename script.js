/*filter */
const tags = document.querySelectorAll('.tag')
let slctdElements = new Set() /*set for displayed tags only*/
let hiddenElements  = new Set() /*set for hidden tags only*/

const filter = (event) => {
    const evnt = event.target
     
    if (evnt.checked){ /*checked*/
        tags.forEach(tag =>{ /*verify each post's tag if match with checkbox tag*/
            if (evnt.value === tag.getAttribute('value')){ /*if same value add to slctedElements */
                hiddenElements.delete(tag)
                slctdElements.add(tag)
                console.log(slctdElements)
            }
            else if(slctdElements.has(tag)){ /*if another checkbox checked show his tags*/
                tag.style.display = "block"
            }
            else { /* no matching tags*/
                hiddenElements.add(tag)
            }
        })
    }

    else if(!evnt.checked){ /*unchecked*/
        tags.forEach(tag =>{ 
            if (evnt.value === tag.getAttribute('value')){ /*if uncheck and other checkboxes checked -> hide*/
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
/*filter*/
