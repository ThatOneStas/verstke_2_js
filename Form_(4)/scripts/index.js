function show_password(TARGET) {
    console.log(TARGET.type)
    const PASSWORD = document.getElementById(TARGET);
    if(PASSWORD.type === "password") {
        PASSWORD.type = "text";
    } 
    else {
        PASSWORD.type = "password";
    }
  }

const getUserRole = (element)=>{
    console.log('on')
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
        getUserRole(LF_BLOCK)
    })
})