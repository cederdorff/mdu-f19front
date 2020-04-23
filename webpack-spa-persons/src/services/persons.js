import loaderService from "./loader.js";
class PersonService {
  constructor() {}

  async loadPersons() {
    try {
      let response = await fetch("https://randomuser.me/api/?results=9");
      let jsonData = await response.json();
      loaderService.show(false);
      return jsonData.results;
    } catch (error) {
      console.log('Error getting persos:', error);
      loaderService.show(false);
    }
  }
}

const personService = new PersonService();
export default personService;