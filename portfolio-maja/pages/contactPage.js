import _bigframe from "./../components/bigFrame.js"

export default class ContactPage {
    constructor() {
        this.bigframe = _bigframe.htmlTemplate;
        this.template();

    }

    template() {
        document.querySelector('#app').innerHTML += /*html*/ `
          <section id="contact" class="page">
          <div class="relativeContainer bigFrame">${this.bigframe}</div>
          
     <article class="pageFrame flexcontainer">
     <h2>Contact Me</h2>
     <img src="images/contact_close-up.svg">
     <div  id="contactText"><p>Feel free to contact me anny time!</p>
     <p>Send an e-mail: <a href = "mailto:m.noerbjerg.j@hotmail.com">m.noerbjerg.j@hotmail.com</a>,</p>
     <p>find me at <a href ="https://www.linkedin.com/in/maja-n%C3%B8rbjerg-jensen-98aba01a2/">LinkedIn</a></p>
     
     <p>or call me maybe <a href = "tel:004522475180">22 47 51 80</a></p>
     
     </div>
    
     </article>

          </section>
        `;

    }




}