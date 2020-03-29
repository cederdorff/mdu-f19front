// import ProjectsPage from "./../pages/projectsPage.js";
// let projectsPage = new ProjectsPage();
class ProjectsService {
    constructor() {
        this.projectObj;
        this.projectArr = [];



    }

    highlightProject(anElement) {
        let img = anElement.getElementsByTagName('IMG')[0];
        img.style.animation = 'scaleproject .3s linear';
        img.style.animationFillMode = 'forwards';

        let textBox = anElement.getElementsByTagName('DIV')[0];
        textBox.style.visibility = 'visible';
        let text = textBox.getElementsByTagName('P')[0];
        text.style.visibility = 'visible';


    }


    noHighlightProject(anElement) {
        let img = anElement.getElementsByTagName('IMG')[0];
        img.style.animation = 'ondoscaleproject .3s linear';
        img.style.animationFillMode = 'forwards';


        let textBox = anElement.getElementsByTagName('DIV')[0];
        textBox.style.visibility = 'hidden';

        let text = textBox.getElementsByTagName('P')[0];
        text.style.visibility = 'hidden';
    }

    showModal(theElement) {
        let theValue = theElement.getAttribute('value');
        console.log(theValue)
        for (const project of this.projectArr) {
            if (theValue === project.title) {
                let theProject = document.querySelector(`#${project.id}`);
                theProject.style.visibility = 'visible';
                // let theVideo = theProject.getElementsByTagName('video')[0];
                videoScroll(`${project.id}`);



            }
        }

    }

    videoScroll(videoElement) {
        let theProject = document.querySelector(`#${videoElement}`);
        let theVideo = theProject.getElementsByTagName('video')[0];

        console.log(theVideo.getBoundingClientRect().bottom, theVideo.getBoundingClientRect().top);

        if (theVideo.getBoundingClientRect().bottom < 770) {
            theVideo.play();
        } else {
            theVideo.pause();
        }

        console.log('scrolling');
        console.log(videoElement)

    }

    noMoreModal(theX) {
        let theModal = theX.parentElement.parentElement;
        theModal.style.visibility = 'hidden';
        theModal.getElementsByTagName('video')[0].pause();
    }


    projectContent() {

        // Web App
        let projWA = {
            'title': "WebApp - Your Game",
            "about": [
                'Are you getting tired of getting the same question from your “never have I ever” app?',
                'Your Party Game is a Web Application with many of the known drinking games and for some of the less known party games. You can play directly in the app, but most importantly you can add your own questions or content.',
                'Did we come up with this idea ourselves? Well, yes, we did. Did we make this as a SPA (Single Page Application) by using modules and javascript classes? Well, yes, we did. Was it fun to code this prototype? Hell yeah, and prototype v2.0 is on its way!',
                '<a href="https://github.com/MajaNorbjerg">Take a look at the source code on github</a> or just <a>create your own game</a>.'
            ],
            "semester": '3rd semester',
            "tools": ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Github', 'Gitkraken'],
            'grade': "12 | A",
            'img': "webapp",
            'video': 'webapp_mobile',
            'id': 'webApp'
        }
        this.projectArr.push(projWA);
        console.log(this.projectArr)


        // Anker Andersen
        let projAA = {
            'title': "Anker Andersen A/S",
            "about": [
                'This case was B2B (Business to business) and therefore a bit different.',
                'The company Anker Andersen A/S makes high-speed counting and sorting machines for non-refillable used beverage containers. They wanted us to make an interface for their customers to get a visualization of the collected data from the machines.',
                'We had to look at both business and user goals to make the interface a success.'
            ],
            "semester": '2nd semester',
            "tools": ['HTML', 'CSS', 'JavaScript', 'Github', 'Gitkraken'],
            'grade': "12 | A",
            'img': 'anker-andersen',
            'video': 'anker-andersen_desktop',
            'id': 'ankerAndersen'
        }
        this.projectArr.push(projAA);


        // Flixbus & handball
        let projFB = {
            'title': "Flixbus - Animation",
            "about": [
                'Can we get data from an API? Well, yes, we can.',
                'In this project we choose to combine Flixbus with handball events. We created a concept which interests both the company and the handball enthusiasts.',
                'The idea includes handballs hanging from the ceiling and a big 2-meter-high screens on the floor encapsulating the handballs.',
                'The user can walk into this space and interact with the handballs which creates a reaction on the screen. There´s one handball for each city, to where Flixbus can drive spectators to handball games. And the city ball is connected to the city on the screen.',
                'If you touch the Aarhus ball, the city sign shows with the name of the city and the current temperature. This data is incorporated from a weather API. You could also show the current weather condition, by making it rain over the city-attraction if it´s currently raining, or make the sun shine, if it´s sunny. This condition should also be retrieved by an API.',
                'This installation would make the handball spectators pumped up with happiness before the game and give them a positive view on Flixbus and a knowledge about their destinations.'
            ],
            "semester": '2nd semester',
            "tools": ['HTML', 'CSS', 'JavaScript', 'API (JSON)', 'Makey makey'],
            'grade': "",
            'img': 'flixbus',
            'video': 'flixbus_desktop',
            'id': 'flixBus'
        }
        this.projectArr.push(projFB);


        // WebDoc
        let projWD = {
            'title': "Webdoc for Eriksminde Efterskole",
            "about": ['Eriksminde Efterskole is a vide boarding school with both creative, democratic subjects beside the ordinary. The school is down to earth and a place where the students feel at home. And the students know this the moment they see it. But here comes the problem… Not enough boys visit the school.',
                'Our concept for this problem is called “Surprise yourself at Eriksminde”. This is based on the headmaster’s statement, that many of their prior students, have done something during the year, that they didn´t think they would before they started.',
                'In a Web Documentary you can meet two current students at the school, who tell about how they have surprised themselves so far (two months in). As user you can freely choose, which story you want.',
                'The concept is easy scalable! You can add more student stories or maybe add more content to their stories if the school wishes to do so.',
                'The headmaster loved our pitch and specially our concept. He was interested in working with us again.'
            ],
            "semester": '2st semester',
            "tools": ['HTML', 'CSS', 'JavaScript', 'Github', 'Adobe Premiere'],
            'grade': "",
            'img': 'eriksminde',
            'video': 'eriksminde_desktop',
            'id': 'eriksminde'
        }
        this.projectArr.push(projWD);


        // Thise
        let projTM = {
            'title': "Thise",
            "about": [
                'The focus in this case was Responsive Web Design. This includes the making of different mockups for different devices and of course media queries to make it work on screen.',
                'For mobile first you should imagine the webpage as a milk carton with four sides – just as the website. On smaller touch devices with a property similar to a milk carton. To turn the carton and see the other content simply do a swipe.'
            ],
            "semester": '1nd semester',
            "tools": ['HTML', 'CSS', 'Mobile first', 'Responsive Web Design RWD'],
            'grade': "12 | A",
            'img': 'thise',
            'video': 'thise_desktop',
            'id': 'thise'
        }
        this.projectArr.push(projTM);


        // Photoshop
        let projPS = {
            'title': "Play in Photoshop",
            "about": [
                'Take photos in studio, capture compositions in the city and photoshop the pictures to be even greater. I´m proud to show the result of this little project.',
                'Studio photos, City compositions, The photoshoped.'

            ],
            "semester": '1st semester',
            "tools": ['Camera', 'Photoshop'],
            'grade': "",
            'img': 'photos-and-ps',
            'photoshoped': [
                'dispersion.jpg',
                'double-exposure_camera.jpg',
                'double-exposure_fly-right.jpg',
                'lines.jpg',
                'papercut.jpg',
                'sky.jpg',
                'wall.jpg',
                'double-exposure_me.jpg'
            ],
            'id': 'photoshop'
        }
        this.projectArr.push(projPS);


        // Mobile First
        let projMF = {
            'title': "Mobile First - Kunsthal Aarhus",
            "about": [
                'You´re at the free museum. You don’t know where to go or what the thoughts behind the exhibition are. But the help is close by, cause on your mobile device, you have the opportunity to walk through the exhibitions ad read or listen to a story about every single piece of art.',
                'This feature is for the mobile first concept.'
            ],
            "semester": '1st semester',
            "tools": ['HTML', 'CSS'],
            'grade': "",
            'img': 'kunsthal',
            'video': 'kunsthal_desktop',
            'id': 'kunsthal'
        }
        this.projectArr.push(projMF);
    }


}
let _projectsService = new ProjectsService();
export default _projectsService;