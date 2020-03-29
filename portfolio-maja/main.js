// import your components, pages and services
import Sign from "./components/sign.js";
// import BigFrame from "./components/bigFrame.js"
import HomePage from "./pages/homePage.js";
import AboutPage from "./pages/aboutPage.js";
import ContactPage from "./pages/contactPage.js";
import ProjectsPage from "./pages/projectsPage.js";

// Import services
import _spaService from "./services/spa.js";
import _bigFrame from "./components/bigFrame.js"
import _sofaService from "./services/sofaService.js"
import _lampService from "./services/lampService.js"
import _frameService from "./services/frameService.js"
import _projectsService from "./services/projectsService.js"





// Declare and init
let sign = new Sign();
// let bigFrame = new BigFrame();
let homePage = new HomePage();
let aboutPage = new AboutPage();
let contactPage = new ContactPage();
let projectsPage = new ProjectsPage();


// init services
_spaService.init();

// _sofaService.animateLines('sign');

// _bigFrame.calcBigFrame();
// _sofaService.animateLines('sofa');
// _sofaService.animateLines('table');
// _sofaService.animateLines('pillow');


// _lampService.animateLines();
// _sofaService.startFirstVideo();
_frameService.sameHightAsWidth();






window.pageChange = () => _spaService.pageChange();
window.navigateTo = (hash) => _spaService.navigateTo(hash);
window.changePosition = () => _sofaService.changePosition();
window.mouseXCoordinate = (event) => _lampService.mouseXCoordinate(event);
window.sameHightAsWidth = () => _frameService.sameHightAsWidth();
window.calcBigFrame = () => _bigFrame.calcBigFrame();
window.highlightProject = (anElement) => _projectsService.highlightProject(anElement);
window.noHighlightProject = (anElement) => _projectsService.noHighlightProject(anElement);
window.noMoreModal = (anElement) => _projectsService.noMoreModal(anElement);
window.showModal = (anElement) => _projectsService.showModal(anElement);
window.videoScroll = (videoElement) => _projectsService.videoScroll(videoElement);