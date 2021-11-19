(function(){

    const allDivs = document.querySelectorAll('div')

    let randomItDiv = Math.floor(Math.random() * (allDivs.length - 1) + 1)
    
    console.log(randomItDiv)

    allDivs[randomItDiv].classList.add('it')
    console.log(allDivs[randomItDiv].className)


    document.body.addEventListener('click', event => {

        console.log(allDivs)

        if (event.target.className !== 'it') {

        const elem = event.target
        elem.style.backgroundColor = 'green'
    
    } else {

        const elem = event.target
        elem.style.backgroundColor = 'red'

        for (let div of allDivs) {
            if (div.style.backgroundColor === 'green') {
               div.style.backgroundColor = 'yellow'
            }
        }

    }
})
}
)()