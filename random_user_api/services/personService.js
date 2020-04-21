class PersonService {
    constructor() {
        this.persons = [];
    }

    async loadPersons() {
        let response = await fetch("https://randomuser.me/api/?results=50&inc=gender,name,picture,cell,email,location,login");
        let jsonData = await response.json();
        this.persons = jsonData.results;
        return jsonData.results;
    }

    getPerson(uuid) {
        let person = this.persons.find(person => person.login.uuid === uuid);
        return person;
    }

    filterPersons(firstName, username, lastName, email, cell, gender) {
        let filteredArr = this.persons.filter(person =>
            person.name.first.toLowerCase().includes(firstName) &&
            person.name.last.toLowerCase().includes(lastName) &&
            person.login.username.toLowerCase().includes(username) &&
            person.email.toLowerCase().includes(email) &&
            person.cell.toLowerCase().includes(cell) &&
            (person.gender === gender || gender === ""));
        return filteredArr;
    }

}
const personService = new PersonService();
export default personService;