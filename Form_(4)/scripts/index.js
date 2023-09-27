function show_password(selector) {
    const TARGET = document.querySelector(selector)
    const VALUE = TARGET.getAttribute("type")
    VALUE == "password" ? TARGET.setAttribute("type", "text") : TARGET.setAttribute("type", "password") 
}

const getUserRole = (element) => {
    const ACTIVE_ELEMENT = element.querySelector(".active")
    const DATA = ACTIVE_ELEMENT.getAttribute("data-role")
    return DATA
}

const getDataFromField = (element) => {
    const VALUE = element.value;
    const TYPE = element.getAttribute("name")

    if (TYPE == "last_name") {
        if (VALUE.length >= 3) {
            return VALUE
        } else {
            alert("Second name to short")
            return null
        }
    }
    if (TYPE == "first_name") {
        if (VALUE.length >= 3) {
            return VALUE
        } else {
            alert("First name to short")
            return null
        }
    }
    // need delete for production ##
    return VALUE
}

// start point
document.addEventListener("DOMContentLoaded", ()=>{
    // read storage
    const USER_DATA = JSON.parse(localStorage.getItem("user"))
    console.log(USER_DATA)
    // get element from document
    const LEFT_BLOCK = document.querySelector(".form__top_LFor_Lblock")
    const RIGHT_BLOCK = document.querySelector(".form__top_LFor_Rblock")
    const LF_BLOCK = document.querySelector(".form__top_LFor")
    const CHECKBOX = document.querySelector(".form__input_checkbox")
    const SUMBIT = document.querySelector(".form__input_sumbit")
    const REGISTER_FORM = document.querySelector(".form")
    //
    const INPUT_LAST_NAME = document.querySelector('.form__input_second_name')
    const INPUT_NAME = document.querySelector('.form__input_first_name')
    const INPUT_EMAIL = document.querySelector('.form__input_email')
    const INPUT_PASSWORD = document.querySelector('.form__input_password')
    const INPUT_PASSWORD_REPEAT = document.querySelector('.form__input_password_reat')
    
    // auto fill
    if(USER_DATA){
        const {role,userLastName,userName,userEmail,userPassword} = USER_DATA
        INPUT_NAME.value = USER_DATA.userName
        INPUT_LAST_NAME.value = USER_DATA.userLastName
        INPUT_EMAIL.value = USER_DATA.userEmail
        INPUT_PASSWORD.value = USER_DATA.userPassword
        INPUT_PASSWORD_REPEAT.value = USER_DATA.userPassword
        CHECKBOX.value = USER_DATA.role
    }
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
        let role = getUserRole(LF_BLOCK);
        let userLastName = getDataFromField(INPUT_LAST_NAME);
        let userName = getDataFromField(INPUT_NAME);
        let userEmail = getDataFromField(INPUT_EMAIL);
        let userPassword = getDataFromField(INPUT_PASSWORD);
        let userConfirmPassword = getDataFromField(INPUT_PASSWORD_REPEAT);

        // validation data
        if (userConfirmPassword != userPassword){
            alert("Passwords don't match, please try again!")
            return
        }

        // create data frame
        const USER_DATA = {
            role, userName, userLastName, userEmail, userPassword
        }
        // set to LS
        localStorage.setItem("user", JSON.stringify(USER_DATA))
        // set to SS
        sessionStorage.setItem("user", JSON.stringify(USER_DATA))
        // set to Cokie
        const cookieOBJ = JSON.stringify(USER_DATA)
        document.cookie = `user=${cookieOBJ}; expires=Thu, 01 Jan 20XX XX:XX:XX UTC; path="/"`
        console.log('USER DATA:', USER_DATA)
    })
})