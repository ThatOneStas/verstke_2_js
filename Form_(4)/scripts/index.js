function show_password(selector) {
    const TARGET = document.querySelector(selector)
    // show
    TARGET.setAttribute("type", "text")
    // hide eye icon
}

const getUserRole = (element)=>{
    const ACTIVE_ELEMENT = element.querySelector(".active")
    const DATA = ACTIVE_ELEMENT.getAttribute('data-role')
    return DATA
}

const getLastUser = (element) => {
    const VALUE = element.value
    if(VALUE.length >= 3){
        return VALUE
    }
    else {
        alert('Name is too short.')
        return false
    }
}


// start point
document.addEventListener("DOMContentLoaded", ()=>{
    // get element from document
    const LEFT_BLOCK = document.querySelector(".form__top_LFor_Lblock")
    const RIGHT_BLOCK = document.querySelector(".form__top_LFor_Rblock")
    const LF_BLOCK = document.querySelector(".form__top_LFor")
    const CHECKBOX = document.querySelector(".form__input_checkbox")
    const SUMBIT = document.querySelector(".form__input_sumbit")
    const REGISTER_FORM = document.querySelector(".form")
    const INPUT_LAST_NAME = document.querySelector('.form__input_second_name')
    // switch user role
    LF_BLOCK.addEventListener("click", ()=>{
        LEFT_BLOCK.classList.toggle('active')
        RIGHT_BLOCK.classList.toggle('active')
    })    
    CHECKBOX.addEventListener("click", ()=>{
        const CHECKBOX_VALUE = CHECKBOX.checked
        CHECKBOX_VALUE ? SUMBIT.disabled = !CHECKBOX_VALUE : SUMBIT.disabled = !CHECKBOX_VALUE
        console.log(CHECKBOX_VALUE)
    })
    // submit form
    REGISTER_FORM.addEventListener("submit", (e)=>{
        e.preventDefault()
        let role = getUserRole(LF_BLOCK)
        let lastUserName = getLastUser(INPUT_LAST_NAME)
        if(lastUserName){
            return 
        }
        // create data frame
        const USER_DATA = {
            role,
            lastUserName
        }
        console.log('USER DATA', USER_DATA)
    })
})