class LampService {
    constructor() {
        this.x;
        this.linesArray = [];
        this.borderArray = [];

    }

    mouseXCoordinate(event) {

        this.x = event.clientX;

        let section = document.querySelector('#home');

        // let oneThirdOfWindow = window.innerWidth / 3;
        let oneThirdOfWindow = section.offsetWidth / 3;
        let margin = (window.innerWidth - section.offsetWidth) / 2

        // console.log(section.offsetWidth);
        // console.log(oneThirdOfWindow);
        // console.log(margin);
        // console.log(window.innerWidth);


        if (this.x <= margin + oneThirdOfWindow) {
            this.light('0');
        } else {
            this.nolight('0');
        }


        if (this.x >= margin + oneThirdOfWindow && this.x <= margin + oneThirdOfWindow * 2) {
            this.light('1');
        } else {
            this.nolight('1');
        }




        if (this.x >= margin + oneThirdOfWindow * 2) {
            this.light('2');
        } else {
            this.nolight('2');
        }


    }



    light(number) {
        let lampImg = document.getElementsByClassName('lampImg');
        let frame = document.getElementsByClassName('frames');
        let lamp = document.getElementsByClassName('lamps');


        lampImg[`${number}`].children[1].classList.add('glow');
        frame[`${number}`].classList.add('highlightFrame')

        let bulbSpaces = lamp[`${number}`].getElementsByClassName('lampBulb');
        for (let i = 0; i < bulbSpaces.length; i++) {
            bulbSpaces[i].style.fill = 'rgba(250, 225, 81, 0.288)';
        }
        lamp[`${number}`].getElementsByClassName('lampFilament')[0].style.fill = 'rgb(250, 250, 104)';
        lamp[`${number}`].getElementsByClassName('lampFilament')[0].style.stroke = 'rgb(250, 250, 104)';
    }

    nolight(number) {
        let lampImg = document.getElementsByClassName('lampImg');
        let frame = document.getElementsByClassName('frames');
        let lamp = document.getElementsByClassName('lamps');

        lampImg[`${number}`].children[1].classList.remove('glow');
        frame[`${number}`].classList.remove('highlightFrame')

        let bulbSpaces = lamp[`${number}`].getElementsByClassName('lampBulb')
        for (let i = 0; i < bulbSpaces.length; i++) {
            bulbSpaces[i].style.fill = 'none';
        }
        lamp[`${number}`].getElementsByClassName('lampFilament')[0].style.fill = '#333';

    }


    animateLines() {
        // frameCorners
        // frameBackground
        // frameOutline
        // frameBorders

        let corners = document.getElementsByClassName("frameCorners");
        let borders = document.getElementsByClassName("frameBorders");
        let outline = document.getElementsByClassName("frameOutline");
        // let background = document.getElementsByClassName("frameBackground");


        this.addToLineArray(corners);
        this.addToLineArray(outline);
        this.addToBorderArray(borders);




        for (const path of this.linesArray) {


            let length = path.getTotalLength();


            path.style.strokeDasharray = length + ' ' + length;
            path.style.strokeDashoffset = length;



            path.getBoundingClientRect();
            // Define our transition
            path.style.transition = path.style.WebkitTransition =
                'stroke-dashoffset 2s ease-in-out';
            // Go!


            path.style.strokeDashoffset = '0';
        }


        for (const path of this.borderArray) {


            path.style.animation =
                'animates 1s linear';
            path.style.animationFillMode = 'forwards';


        }


    }

    addToLineArray(shape) {
        for (const path of shape) {
            this.linesArray.push(path);
        }
    }

    addToBorderArray(shape) {
        for (const path of shape) {
            this.borderArray.push(path);
        }
    }
}
let _lampService = new LampService();
export default _lampService;