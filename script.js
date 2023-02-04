/*filter */
const checkboxes = document.querySelectorAll('input[type="checkbox"]')
const tags = document.querySelectorAll('.tag')


const filter = (event) => {
    let slctdElements = []
    let hiddenElements = []
    const target = event.target

    if (target.checked){
        tags.forEach(tag =>{
            if (target.value === tag.getAttribute('value')){
                slctdElements.push(tag)
                tag.style.display = "block"
                console.log(slctdElements)
            }
            else{
                hiddenElements.push(tag)
                tag.style.display = "none"
                console.log(hiddent)
            }
        })
    }
    else{
        tags.forEach( tag =>{
            tag.style.display = "block"
        })
    }


}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change',filter)
})