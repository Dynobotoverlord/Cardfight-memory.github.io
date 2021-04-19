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

let firstGuess = ''
let secondGuess = ''
let previousTarget = null
let count = 0

gameGrid.sort(()=> 0.5 - Math.random())


// 
// 
gameGrid.forEach((item)=>{
    const card = document.createElement('div')
    card.classList.add('card')
    card.dataset.name = item.name
    card.style.backgroundImage = `url(${item.img})`
    grid.appendChild(card)
})

function match(){
    var Selected = document.querySelectorAll('.Selected');
    Selected.forEach((card)=>{
        card.classList.add('match')
    })
}


grid.addEventListener('click',function(event){
    let clicked = event.target
    if (clicked.nodemane === 'SECTION' || clicked ===previousTarget){
        return
    }
    if(count < 2){
        count++
    if (count ===1){
        firstGuess = clicked.dataset.name
        clicked.classList.add('Selected')
    }  
    else{
        secondGuess= clicked.dataset.name
        clicked.classList.add('Selected')
    }
    if (firstGuess !=='' && secondGuess !== ''){
        if(firstGuess ===secondGuess){
            match()
            resetGuess()
        }
        else{
            resetGuess()
        }
        previousTarget = clicked;
    }
    clicked.classList.add('Selected')}
})

function resetGuess(){
    firstGuess = ''
    secondGuess = ''
    count = 0;

    var Selected = document.querySelectorAll('.Selected')
    Selected.forEach((card)=>{
        card.classList.remove('Selected')
    })

}





