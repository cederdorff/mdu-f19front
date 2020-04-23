import _bigFrame from "./../components/bigFrame.js"
class FrameService {
    constructor() {

    }
    sameHightAsWidth() {
        let frames = document.getElementsByClassName('frames');
        // console.log(frames)
        for (const frame of frames) {
            // console.log(frame.offsetWidth, frame.offsetHeight)
            let width = frame.offsetWidth;
            // console.log(width)
            frame.style.height = `${width}px`;
        }


        // _bigFrame.calcBigFrame()
        let floor = document.querySelector('#floor');
        let wrapper = document.getElementsByClassName('wrapper')[0];
        let wrapperTop = wrapper.getBoundingClientRect().top;
        let wrapperHeightPart = wrapper.offsetHeight / 2.2;

        wrapper.style.height = `100%`


        let floorHeight = window.innerHeight - wrapperTop - wrapperHeightPart;

        floor.style.height = `${floorHeight}px`


        // console.log(window.innerHeight)
        // console.log(window.innerHeight - wrapper.offsetHeight)
        // console.log(wrapper.offsetHeight / window.innerHeight * 100)
        // document.getElementsByClassName('signAndText')[0].style.width = `${window.innerWidth - (_bigFrame.border * 2)}px`;

        let contactTextHeight = document.querySelector('#contactText').getBoundingClientRect().bottom;
        let aboutTextHeight = document.querySelector('#aboutText').getBoundingClientRect().bottom;
        let contactImgHeight = window.innerHeight - contactTextHeight;
        let aboutImgHeight = window.innerHeight - aboutTextHeight;

        let contactImg = document.querySelector('#contactText').previousElementSibling;
        contactImg.style.height = `${contactImgHeight}px`;

        let aboutImg = document.querySelector('#aboutText').previousElementSibling;
        aboutImg.style.height = `${aboutImgHeight}px`;

    }
}
let _frameService = new FrameService();
export default _frameService;