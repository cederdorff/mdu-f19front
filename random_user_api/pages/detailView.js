import personService from "../services/personService.js"

export default class DetailView {
    constructor() {
        // this.data = [];
        // this.initData();
        // this.data = personService.persons;
        this.template();
    }

    // async initData() {
    //     // let persons = await personService.loadPersons();
    //     // console.log(await this.data)
    //     this.data = await personService.loadPersons();
    // }

    template() {
        document.querySelector('#detailView').innerHTML += /*html*/ `<article>
        <div class="line">
        <button type="button" onclick="goback()">Go back</button> </div>
     
         
           <div id="theDetailView">
           </div>
          
           </article>
      `

    }

    goToDetailView(id) {

        let template = "";
        let theId = id.slice(2, id.length);
        personService.getPerson(theId)
        console.log(personService.getPerson(theId))

        for (const person of personService.persons) {
            if (person.login.uuid === theId) {


                template += /*html*/ ` 
            
                <img src="${person.picture.medium}" alt="medium"> 
<br>


             <h2>${person.name.first}
            ${person.name.last} </h2>

            <div class="textCollection">
            <p><b>Username: </b>${person.login.username}</p>
            <p><b>Gender: </b>${person.gender}</p>
            </div>
       
            <div class="textCollection">
      <p><b>Adress: </b>${person.location.street.name} ${person.location.street.number}</p>
   
     
      <p><b>Timezone: </b>${person.location.timezone.offset}</p>
      </div>
      <div class="textCollection">
      <p><b>Email: </b><a href="mailto:${person.email}">${person.email}</a></p>
      <p><b>Cell number: </b><a href="tel:${person.cell}">${person.cell}</a></p>
      </div>
            `;

            }
        }
        document.querySelector('#theDetailView').innerHTML = template;
        document.querySelector('#profile').style.display = 'none'
        document.querySelector('#detailView').style.display = 'block'
    }

    goback() {
        document.querySelector('#detailView').style.display = 'none';
        document.querySelector('#profile').style.display = 'block';
    }

}