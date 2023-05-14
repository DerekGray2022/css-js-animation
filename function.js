const divs = document.querySelectorAll('div');
const body = document.body;
let num;
let toggle = true;

//      Hide the scroll bars when selected div is opened to 100vh
body.style.overflow = "hidden";

//      Loop through each div and add an event listener
divs.forEach((div, id) => {
    div.addEventListener('click', () => {
        //      Toggle Open & Close sounds
        let sound = new Audio(
            toggle ?
                "assets/div_open.mp3" :
                "assets/div_close.mp3"
        );
        sound.volume = 0.75;
        sound.play();
        toggle = !toggle;

        //      Toggle selected div to 'active' class : Open 100vh
        let activeClass = `active${id}`;
        div.classList.toggle(activeClass);

        /*
            Set body background colour to that of next div...
            unless it's the last div...in which case,
            set body background colour to that of this div.
        */
        (id == divs.length - 1) ? num = id : num = id + 1;
        const val = window.getComputedStyle(divs[num], null).getPropertyValue('background-color');
        body.style.backgroundColor = val;
    });
});





