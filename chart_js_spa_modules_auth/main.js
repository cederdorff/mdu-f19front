// import your pages
import LoginPage from "./pages/login.js";
import HomePage from "./pages/home.js";
import ChartPage from "./pages/chart.js";
import ProfilePage from "./pages/profile.js";
import ChartComparePage from "./pages/chartCompare.js";

// import your services
import spaService from "./services/spa.js";
import authService from "./services/auth.js";

// Declare and init pages
let loginPage = new LoginPage();
let homePage = new HomePage();
let chartPage = new ChartPage();
let profilePage = new ProfilePage();
let chartComparePage = new ChartComparePage();

// init services 
spaService.init();
authService.init();

// ready called when user is authenticated 
// and the app is ready!
window.ready = () => {
    console.log("READY");
    chartPage.init();
    chartComparePage.init();
}

// onclick handlers
window.logout = () => profilePage.logout();
window.updateUser = () => profilePage.updateUser();
window.previewImage = (file, previewId) => profilePage.previewImage(file, previewId);