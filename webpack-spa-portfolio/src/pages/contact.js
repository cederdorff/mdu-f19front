export default class ContactPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#app').innerHTML += /*html*/ `
      <section id="contact" class="page">
        <header class="topbar">
          <h2>Contact</h2>
        </header>
        <p>Contact info</p>
        <p><a href="mailto:race@eaaa.dk">race@eaaa.dk</a></p>
        <a href="http://cederdorff.com" target="_blank">
          <img src="public/images/logo.png" alt="Cederdorff logo" class="logo">
        </a>
      </section>
    `;
  }
}