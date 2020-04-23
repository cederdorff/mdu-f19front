class BigFrame {
    constructor() {
        this.border = window.innerWidth * 0.015;
        this.htmlTemplate;
        this.calcBigFrame()




    }

    template(xp1, xp2, xp3, xp4, yp1, yp2, yp3, yp4, contentWidth, contentHeight, htmlWidth, htmlHeight) {
        this.htmlTemplate = /*html*/ `
        <svg version="1.1" class="frameSVG fixed placeInBack" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 ${htmlWidth} ${htmlHeight}" e="enable-background:new 0 0 ${htmlWidth} ${htmlHeight};" xml:space="preserve">
       
       
        <g id="theBigFrame">
        <polygon class="frameBordersS" points="${xp4}, ${yp1} ${xp4}, ${yp4} ${xp3}, ${yp3} ${xp3}, ${yp2} 		"/> <!-- Right side -->
 <polygon class="frameBordersS" points="${xp2}, ${yp2} ${xp2}, ${yp3} ${xp1}, ${yp4} ${xp1}, ${yp1} 		"/> <!-- Left side -->
 <!--<polygon class="frameBordersS placeInFront" id="bigFrameButtom" points="${xp4}, ${yp4} ${xp1}, ${yp4} ${xp2}, ${yp3} ${xp3}, ${yp3} 	-->	<!--"/>--> <!-- Down side -->
 <polygon class="frameBordersS" points="${xp4}, ${yp1} ${xp3}, ${yp2} ${xp2}, ${yp2} ${xp1}, ${yp1} 		"/> <!-- Upper side -->
 <!--<rect class="frameBackgroundS" x="64.5" y="63.5" width="736" height="736"/> --><!-- The middle -->
</g>

<g>
 <!-- <rect class="frameOutlineS" x="${xp1}" y="${yp1}" width="${htmlWidth}" height="${htmlHeight}"/> --> <!-- All -->
 <rect class="frameBackgroundS" x="${xp2}" y="${yp2}" width="${contentWidth}" height="${contentHeight}"/> <!-- The middle -->
 <line class="frameCornersS" x1="${xp1}" y1="${yp4}" x2="${xp2}" y2="${yp3}"/> <!-- Lower left corner -->
 <line class="frameCornersS" x1="${xp3}" y1="${yp3}" x2="${xp4}" y2="${yp4}"/> <!-- Lower right corner -->
 <line class="frameCornersS" x1="${xp3}" y1="${yp2}" x2="${xp4}" y2="${yp1}"/> <!-- Upper right corner -->
 <line class="frameCornersS" x1="${xp2}" y1="${yp2}" x2="${xp1}" y2="${yp1}"/> <!-- Upper left corner -->

</g>
<!--
<g class="placeInFront"><polygon class="frameBordersS placeInFront" id="bigFrameButtom" points="${xp4}, ${yp4} ${xp1}, ${yp4} ${xp2}, ${yp3} ${xp3}, ${yp3} -->		<!--"/> --><!-- Down side --></g>


   </svg>

   <svg version="1.1" class="frameSVG fixed placeInFront" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 ${htmlWidth} ${yp2}" e="enable-background:new 0 0 ${htmlWidth} ${yp2};" xml:space="preserve">
        <g class="placeInFront">
        <polygon class="frameBordersS" points="${xp4}, ${yp1} ${xp3}, ${yp2} ${xp2}, ${yp2} ${xp1}, ${yp1} 		"/> <!-- Upper side -->
       


        </svg>

        <svg version="1.1" class="frameSVG fixedBottom placeInFront" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="${yp2}"
        viewBox="0 ${yp3} ${htmlWidth} ${yp2}" e="enable-background:new 0 ${yp3} ${htmlWidth} ${yp2};" xml:space="preserve">
        <g class="placeInFront">
     
        <polygon class="frameBordersS" id="bigFrameButtom" points="${xp4}, ${yp4} ${xp1}, ${yp4} ${xp2}, ${yp3} ${xp3}, ${yp3} 		"/> <!-- Down side --></g>


        </svg>
        `
    }

    async calcBigFrame() {

        this.border = window.innerWidth * 0.015;

        let contentWidth = window.innerWidth - (this.border * 2);
        let contentHeight = window.innerHeight - (this.border * 2);

        // console.log(contentWidth, contentHeight)
        let start = 0;

        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        // console.log(windowWidth, windowHeight)

        // console.log(htmlWidth, htmlHeight, window.innerWidth)



        let xp1 = start;
        let xp2 = this.border;
        let xp3 = xp2 + contentWidth;
        let xp4 = xp3 + this.border;

        let yp1 = start;
        let yp2 = this.border;
        let yp3 = yp2 + contentHeight;
        let yp4 = yp3 + this.border;


        await this.template(xp1, xp2, xp3, xp4, yp1, yp2, yp3, yp4, contentWidth, contentHeight, windowWidth, windowHeight);

        let frames = document.getElementsByClassName('bigFrame');
        frames[0].innerHTML = this.htmlTemplate;

        this.setSectionMargin();

    }

    setSectionMargin() {
        let pages = document.getElementsByClassName('page');
        let navButtons = document.getElementsByClassName('signAndText');

        for (const page of pages) {
            let id = page.getAttribute('id');
            // console.log(id)
            if (id !== 'home') {
                let persentage;
                if (window.innerWidth > 1300) {
                    persentage = 0.70;
                } else if (window.innerWidth > 1100) {
                    persentage = 0.85;
                } else if (window.innerWidth > 600) {
                    persentage = 0.75;
                } else {
                    persentage = 0.95;

                }
                let contentWidth = (window.innerWidth - (this.border * 2)) * persentage;
                // let contentHeight = (window.innerHeight - (this.border * 2));

                page.style.width = `${contentWidth}px`;
                // console.log(contentWidth)


                let contentPadding = (window.innerWidth - contentWidth - (this.border * 2)) / 2;



                // page.style.width = `50%`;
                page.style.margin = `0 auto`;
                page.style.padding = `${this.border}px ${contentPadding}px`;
                page.style.background = 'var(--colorFrameFill)';

            }

        }

        // document.querySelector('#contact')
    }

}
let _bigFrame = new BigFrame();
export default _bigFrame;