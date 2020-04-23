import _personService from "../services/persons.js";
export default class PersonsPage {
  constructor() {
    this.template();
    this.initData();
  }

  initData() {

  }

  template() {
    document.querySelector('#app').innerHTML += /*html*/ `
      <section id="persons" class="page">
        <header class="topbar">
          <h2>Persons</h2>
        </header>
        <div id="grid-persons" class="grid-container"></div>
      </section>
    `;
  }

  appendPersons(persons) {
    let template = "";
    for (let person of persons) {
      template += /*html*/ `
        <article>
          <img src="${person.picture.large}">
          <h4>${person.name.first} ${person.name.last}</h4>
          <p><a href="mailto:${person.email}">${person.email}</a></p>
        </article>
        `;
    }
    document.querySelector("#grid-persons").innerHTML = template;
  }
}