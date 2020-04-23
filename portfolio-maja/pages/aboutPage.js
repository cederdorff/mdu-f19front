import _bigframe from "./../components/bigFrame.js"
export default class AboutPage {
    constructor() {
        this.bigframe = _bigframe.htmlTemplate;
        this.template();

    }

    template() {
        document.querySelector('#app').innerHTML += /*html*/ `
          <section id="about" class="page">
          <div class="relativeContainer bigFrame">${this.bigframe}</div>
          
     <article class="pageFrame">
     <h2>About Me</h2>
     <img src="images/about_close-up.svg">
     <div id="aboutText">
     <p>I´m an all-round <b>multimedia designer student</b>, I´m a fast learning <b>frontend developer</b>, and I´m a badass pole dancer.</p>
     <p>I spend a lot of my spare time in my code editor trying to figure out newer (to me anyways), smarter or faster ways to code.</p>
     <p>When I´m not coding at my living room office, you can find me at school, getting smarter every day, or at work, making some funny money, or at the studio swinging around a pole for poledance.
     </p>
     </div>
     </article>

          </section>
        `;

    }
}