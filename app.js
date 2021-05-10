
const hero = document.querySelector('.hero')
const hamburguer = document.querySelector('#hamburguer')
const nav = document.querySelector('nav')
const slider = document.querySelector('.slider')


let counter = 0 

if (counter == 0 ) {
    const id = setInterval(() => {
        counter == 80 ? (clearInterval(id)) : (counter += 1)
        hero.style.height = `${counter}%`
    },17)
}
let counterW = 100
setTimeout(() => {
    if (counterW == 100) {
        const id = setInterval(() => {
            counterW == 80 ? (clearInterval(id)) : (counterW -= 1)
            hero.style.width = `${counterW}%`
        },50)
    }
}, 1700)

let counterX = -100
setTimeout(() => {
    if (counterX == -100) {
        const id = setInterval(() => {
            counterX == 0 ? (clearInterval(id)) : (counterX += 1)
            slider.style.left = `${counterX}%`
        },10)
    }
}, 1700)

let counterO = 0
setTimeout(() => {
    if (counterO == 0) {
        const id = setInterval(() => {
            counterO == 100 ? (clearInterval(id)) : (counterO += 10)
            nav.style.opacity = `${counterO}%`
        },100)
    }
}, 3000)





