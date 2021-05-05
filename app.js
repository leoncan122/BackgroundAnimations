
const hero = document.querySelector('.hero')
const hamburguer = document.querySelector('#hamburguer')
const headline = document.querySelector('.headline')
const slider = document.querySelector('.slider')

// const tl = new TimelineMax();

// tl.to(hero,1, {height: "0%"}, {height: "80%", ease: power2.easeInOut})
counter = 0 
if (counter == 0 ) {
    const id = setInterval(() => {
        counter == 80 ? (clearInterval(id)) : (counter += 5)
        hero.style.height = `${counter}%`
    },30)
    
    
}



