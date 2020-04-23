export default class NavBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <nav class="tabbar">
        <a href="#home">Home</a>
        <a href="#persons">Persons</a>
      </nav>
    `;
  }
}