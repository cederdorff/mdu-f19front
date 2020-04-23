import _bigframe from "./../components/bigFrame.js"
import _projectsService from "./../services/projectsService.js"

export default class ProjectsPage {
    constructor() {
        this.bigframe = _bigframe.htmlTemplate;
        this.aboutText;
        this.toolsList;
        this.grade;

        this.modals = "";
        this.projectOverview = ""

        _projectsService.projectContent();

        this.modalTemplate();
        this.projectsTemplate();

        this.template();

    }

    template() {
        document.querySelector('#app').innerHTML += /*html*/ `
          <section id="projects" class="page">
          <div class="relativeContainer bigFrame">${this.bigframe}</div>
          
     <article class="pageFrame">
     <h2>My Projects</h2>
     <section class="flexcontainer">
    
     ${this.projectOverview}
    
     </section>

    
     </article>
    

           </section>


           ${this.modals}


        `;

    }

    projectsTemplate() {
        console.log(_projectsService.projectArr)

        for (const project of _projectsService.projectArr) {
            this.projectOverview += /*html*/ `
            <div class="projects relativeContainer" value="${project.title}" onmouseover="highlightProject(this)" onmouseout="noHighlightProject(this)" onclick="showModal(this)"><div><p>${project.title}</p></div><img src="images/project_${project.img}.png"></div>
            `
        }
    }

    modalTemplate() {

        for (const project of _projectsService.projectArr) {



            this.aboutText = "";
            this.toolsList = "";



            for (const about of project.about) {
                this.aboutText += `<p>${about}</p>`
            }
            for (const tool of project.tools) {
                this.toolsList += `<li>${tool}</li>`;
            }

            let grade = "";
            if (project.grade !== "") {
                grade = `<p><b>Grade:</b> ${project.grade}</p>`;
            }

            let extramaterial = "";
            let extramaterials = "";
            if (project.photoshoped) {
                for (const image of project.photoshoped) {
                    extramaterials += `<img src="images/composition/${image}" width="30%"></img>`;
                }

                extramaterial = `<section class="flexcontainer">${extramaterials}</section>`;
            }

            let video = "";
            if (project.video) {

                video = `<video width="320" height="240" loop controls>
 
                <source src="videos/${project.video}.webm" type="video/webm"  >
                <source src="videos/${project.video}.mp4" type="video/mp4"  >
                
                Your browser does not support the video tag.
                </video>`;

            }


            this.modals += /*html*/ `
        <section id="${project.id}" class="modal">
        <div onscroll="videoScroll('${project.id}')">
                   <p class="exit" onclick="noMoreModal(this)">X</p>
                  
        
                  
                   <article class="infoText">
                   <section>
                   <h2>${project.title}</h2>
                   ${this.aboutText}
         <p><b>Semester:</b> ${project.semester}</p>  
         </section>
   
         <section>
         <p><b>Tools:</b></p>
         <ul>${this.toolsList}</ul>    
         ${grade}
         </section>
      
         </article>


        <article  class="infoImg">
        ${video}
         ${extramaterial}
       

         </article>
         </div>
         </section>
        `


        }
        // console.log(this.modals)
    }



}