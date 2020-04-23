export default class NavBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <nav class="tabbar">

      </nav>
    `;
  }
}