const cardArray = [
    {
        name : 'vairina',
        img :'images/Varina.png',
    },
    {
    name : 'nirvana',
    img :'images/Nirvana.png',
    },

    {
    name : 'reiyu',
    img :'images/Reiyu.png',
    },

    {
    name : 'rino',
    img :'images/Rino.png',
    },

    {
    name : 'crit',
    img :'images/DragonCrit.png',
    },


    {
    name : 'heal',
    img :'images/DragonHeal.png',
    },

    {
    name : 'front',
    img :'images/DragonStand.png',
    },

    {
    name : 'inferno',
    img :'images/inferno.png',
    },

    {
    name : 'sunburst',
    img :'images/SunBurst.png',
    },

    {
     name : 'stealth',
     img :'images/Stealth.png',
     },

     {
     name : 'anky',
     img :'images/Anky.png',
        },

    {
    name : 'trickstar',
    img :'images/TrickStar.png',
    
    },

]

const game = document.getElementById('game')

const grid =document.createElement('section')
grid.setAttribute('class','grid')

game.appendChild(grid)

let gameGrid = cardArray.concat(cardArray)

gameGrid.forEach((item)=>{
    const card = document.createElement('div')
    card.classList.add('card')
    card.dataset.name = item.name
    card.style.backgroundImage = `url(${item.img})`
    grid.appendChild(card)
})

gameGrid.sort(()=> 0.5 - Math.random)


