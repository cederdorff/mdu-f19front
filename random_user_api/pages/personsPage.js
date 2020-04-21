import personService from "../services/personService.js"
export default class PersonsPage {
    constructor() {
        this.data = [];
        this.allPersons;
        this.template();
        this.initData();
    }

    async initData() {
        this.data = await personService.loadPersons();
        this.appendPersons(this.data);
        this.createGenderOptions();
        // this.createTimezoneOptions();
        this.showFilter();
    }
    template() {
        document.querySelector('#profile').innerHTML += /*html*/ `
        <h2>Persons</h2>
        <article id="filterInputs">
            <label class="alwaysShow" for="firstName">First name:</label>
            <label class="alwaysShow" for="lastName">Last name:</label>
            <input class="alwaysShow" type="search" id="firstName" placeholder="Search by first name"
                onkeyup="filter()">
            <input class="alwaysShow" type="search" id="lastName" placeholder="Search by last name"
                onkeyup="filter()">
            <label class="filter" for="username">Username:</label>
            <label class="filter" for="email">Email:</label>

            <input class="filter" type="search" id="username" placeholder="Search by username"
                onkeyup="filter()">
            <input class="filter" type="search" id="email"
                onkeyup="filter()"
                placeholder=" Search for an email" title="Search by email">
            <label class="filter" for="cell">Cell number:</label>
            <label class="filter" for="gender">Gender:</label>

            <input class="filter" type="search" id="cell"
                onkeyup="filter()" placeholder="Search by phone number"
                title="Type in cell number">
          
            <select class="filter" id="gender"
               onchange=" filter()">
               <option value="">All genders</option>
            </select>

            <input id="filterBtn" class="displayNone" type="checkbox" onclick="showFilter()">
            <label for="filterBtn">Filter even more</label>
        </article>
        <div id="flexPersons"></div>
        `;
    }

    appendPersons(persons) {
        let template = "";
        for (const person of persons) {
            template += /*html*/ ` 
            <article class="profile" id="ID${person.login.uuid}" onclick="goToDetailView(this.id)"> 
                <img src="${person.picture.thumbnail}" alt="thumbnail"> 
                <div> ${person.name.first} ${person.name.last} </div>
            </article >
            `;
        }
        document.querySelector('#flexPersons').innerHTML = template;
    }

    // Option values from the api to the select gender box
    //.............................................................
    createGenderOptions() {
        let filteredProperties = [];

        // Add the property to the array if the value isn´t there allready
        for (const person of this.data) {
            if (filteredProperties.indexOf(person.gender) === -1) {
                filteredProperties.push(person.gender);
            }
        }

        // Create options for the select box based on the dublicate-free array
        for (const value of filteredProperties) {
            var select = document.getElementById("gender");
            var option = document.createElement("option");

            // Insert the values to options
            option.text = value;

            // Create option
            select.add(option);
        }
    };


    // Option values from the api to the select gender box
    //.............................................................
    // createTimezoneOptions() {
    //     let filteredProperties = [];

    //     // Add the property to the array if the value isn´t there allready
    //     for (const person of this.data) {
    //         if (filteredProperties.indexOf(person.location.timezone.offset) === -1) {
    //             filteredProperties.push(person.location.timezone.offset);
    //         }
    //     }
    //     filteredProperties.sort();

    //     // Create options for the select box based on the dublicate-free array
    //     for (const value of filteredProperties) {
    //         var select = document.getElementById("timezone");
    //         var option = document.createElement("option");

    //         // Insert the values to options
    //         option.text = value;

    //         // Create option
    //         select.add(option);
    //     }
    // };

    // calling the filter function in personServices and appends the filtered returned persons
    filter(firstName, username, lastName, email, cell, gender) {
        let filteredPersons = personService.filterPersons(firstName, username, lastName, email, cell, gender);
        this.appendPersons(filteredPersons);
    }

    showFilter() {
        let checkBox = document.querySelector('#filterBtn')
        let filter = document.querySelector('#filterInputs').querySelectorAll('.filter');
        for (const input of filter) {
            input.classList.toggle('displayNone');
        }

        let label = document.querySelector('[for="filterBtn"]')
        if (checkBox.checked == true) {
            label.innerHTML = "Less filtering"
        } else {
            label.innerHTML = "Even more filtering"
        }
    }
}