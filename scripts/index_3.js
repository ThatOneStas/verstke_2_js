const changeBgColor=(selector, color)=>{
    const element = document.querySelector(selector)
    element.style.backgroundColor = color
}

const clearHTMLElement = (selector)=>{
    const TARGET = document.querySelector(selector)
    // clean all
    TARGET.innerHTML = ''
}

document.addEventListener("DOMContentLoaded", ()=>{
    const RED_BTN = document.querySelector('.main_btn')
    // const NAME = document.querySelector(".form__name")
    const FORM = document.querySelector('.form')
    const FORMPUB = document.querySelector('.formPub')
    const SHOW_ELEMENT_BTN = document.querySelector('.show__element')

    // NAME.addEventListener('change', (e)=>{
    //     e.preventDefault()
    //     // console.log(e.target.value)
    // })

    FORM.addEventListener('submit', (e)=>{
        e.preventDefault()
        // get elements
        const NAME = document.querySelector(".form__name")
        const COLOR = document.querySelector(".form__color")
        const USER_NAME = NAME.value
        const USER_COLOR = COLOR.value

        console.log(USER_COLOR)
        changeBgColor('body', USER_COLOR)

        NAME.value = ""
        // display status
        alert('Your request sended!')
    })

    FORMPUB.addEventListener('submit', (e)=>{
        e.preventDefault()

        const NAME = document.querySelector(".formPub__UserName")
        const PHONE = document.querySelector(".formPub__UserPhone")
        const MAIL = document.querySelector(".formPub__UserMail")
        const QUANTITY = document.querySelector(".formPub__UserQuantity")
        const EXTRA = document.querySelector(".formPub__UserExtra")
        const DATE = document.querySelector(".formPub__UserDate")
        const TIME = document.querySelector(".formPub__UserTime")
        const USER_NAME = NAME.value
        const USER_PHONE = PHONE.value
        const USER_MAIL = MAIL.value
        const USER_QUANTITY = QUANTITY.value
        const USER_EXTRA = EXTRA.value
        const USER_DATE = DATE.value
        const USER_TIME = TIME.value

        console.log(`${USER_NAME + " " + USER_PHONE + " " + USER_MAIL + " " + USER_QUANTITY + " " + USER_DATE + " " + USER_TIME + " " + USER_EXTRA}`)

        alert('Your request sended! Wait till our stuff review it!')
    })

    SHOW_ELEMENT_BTN.addEventListener('click', (e)=>{
        e.preventDefault()
        // generates html
        let html_code = `
            <h1>Test</h1>
            <div class="content__area_box">
                test
            </div>
        `
        // get inserting area
        const AREA = document.querySelector('.content__area')
        // put html in it
        AREA.innerHTML = html_code
    })
})