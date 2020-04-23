// import your components, pages and services
import NavBar from "./components/navbar.js";
import HomePage from "./pages/home.js";
import PersonsPage from "./pages/persons.js";
import spaService from "./services/spa.js";

// Declare and init
let navbar = new NavBar();
let homePage = new HomePage();
let personsPage = new PersonsPage();

// init services
spaService.init();

window.pageChange = () => spaService.pageChange();