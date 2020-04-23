// "use strict";
// Import pages
import PersonsPage from "./pages/personsPage.js";
import DetailView from "./pages/detailView.js";

// Declare and init pages
let personsPage = new PersonsPage();
let detailView = new DetailView();

// handle events from the DOM
window.search1And2 = (searchValue, mainProperty, property1, property2) => personsPage.search1And2(searchValue, mainProperty, property1, property2)
window.search1 = (input, property) => personsPage.search1(input, property)
window.search1And1 = (searchValue, mainProperty, property1) => personsPage.search1And1(searchValue, mainProperty, property1);
window.search2And2 = (searchValue, mainProperty, mainProperty2, property1, property2) => personsPage.search2And2(searchValue, mainProperty, mainProperty2, property1, property2);
window.search3 = (searchValue, property, property2, property3) => personsPage.search3(searchValue, property, property2, property3);
window.goToDetailView = (username) => detailView.goToDetailView(username);
window.filter = () => {
    let firstName = document.querySelector("#firstName").value.toLowerCase();
    let lastName = document.querySelector("#lastName").value.toLowerCase();
    let username = document.querySelector("#username").value.toLowerCase();
    let email = document.querySelector("#email").value.toLowerCase();
    let cell = document.querySelector("#cell").value.toLowerCase();
    let gender = document.querySelector("#gender").value.toLowerCase();
    personsPage.filter(firstName, username, lastName, email, cell, gender);
}
window.showFilter = () => personsPage.showFilter();
window.goback = () => detailView.goback()