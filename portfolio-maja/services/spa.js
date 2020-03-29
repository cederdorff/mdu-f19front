import _frameService from "./frameService.js"
import _sofaService from "./sofaService.js"
import _lampService from "./lampService.js"
import _bigFrame from "./../components/bigFrame.js"
class SpaService {
  constructor() {
    this.defaultPage = "home";
  }

  init() {
    this.pages = document.querySelectorAll(".page");
    this.navItems = document.querySelectorAll(".tabbar a");
    this.pageChange();
  }

  // hide all pages
  hideAllPages() {
    for (let page of this.pages) {
      page.style.display = "none";
    }
  }

  // show page or tab
  showPage(pageId) {
    this.hideAllPages();
    document.querySelector(`#${pageId}`).style.display = "block";
    this.setActiveTab(pageId);

    if (pageId === 'home') {
      document.querySelector('#signText').innerHTML = /*html*/ `<p>At</p> <h1>Majas Livingroom</h1>`
      _frameService.sameHightAsWidth();
      console.log(navigator.userAgent.includes("Edge"))

      if (navigator.userAgent.includes("Edge") === false) {
        console.log('this is the chrome')
        _sofaService.animateLines('sofa');
        _sofaService.animateLines('table');
        _sofaService.animateLines('pillow');

        _lampService.animateLines();
      }
      _sofaService.startFirstVideo();

      // document.getElementsByClassName('signAndText')[0].classList.add('hide');




    } else {
      // document.getElementsByClassName('signAndText')[0].classList.remove('hide');



      let signAndText = document.querySelector('#signText');

      signAndText.innerHTML = /*html*/ `<p>Back to</p> <h1>Livingroom</h1>`;
      // signAndText.style.animation = 'fadeIn 8s';
      signAndText.style.cursor = "pointer";

      let minHeight = window.innerHeight - _bigFrame.border * 2;

      document.querySelector(`#${pageId}`).style.minHeight = `${minHeight}px`;




      // let signPrev = document.querySelector('#signPrevious');
      // let signNext = document.querySelector('#signNext');

      // if (pageId === 'contact') {
      //   signPrev.innerHTML = /*html*/ `<p>Go to</p> <h1>Project</h1> <p>frame</p>`;
      //   // signPrev.onclick = "navigateTo('co')"
      //   signPrev.name = "projects";
      //   signNext.innerHTML = /*html*/ `<p>Go to </p> <h1>About</h1> <p>frame</p>`;
      //   signNext.name = "about";
      // }

      // if (pageId === 'about') {
      //   signPrev.innerHTML = /*html*/ `<p>Go to </p> <h1>Contact</h1> <p>frame</p>`;
      //   signPrev.name = "contact";
      //   signNext.innerHTML = /*html*/ `<p>Go to </p> <h1>Project</h1> <p>frame</p>`;
      //   signNext.name = "projects";
      // }

      // if (pageId === 'projects') {
      //   signPrev.innerHTML = /*html*/ `<p>Go to </p> <h1>About</h1> <p>frame</p>`;
      //   signPrev.name = "about";
      //   signNext.innerHTML = /*html*/ `<p>Go to </p> <h1>Contact</h1> <p>frame</p>`;
      //   signNext.name = "contact";
      // }


    }
  }

  // sets active tabbar/ menu item
  setActiveTab(pageId) {
    for (let navItem of this.navItems) {
      if (`#${pageId}` === navItem.getAttribute("href")) {
        navItem.classList.add("active");
      } else {
        navItem.classList.remove("active");
      }
    }
  }

  // navigate to a new view/page by changing href
  navigateTo(pageId) {
    window.location.href = `#${pageId}`;
  }

  // set default page or given page by the hash url
  // function is called 'onhashchange'
  pageChange() {
    let page = this.defaultPage;
    if (window.location.hash) {
      page = window.location.hash.slice(1);
    }


    this.showPage(page);
  }

  // show and hide tabbar
  hideTabbar(hide) {
    let tabbar = document.querySelector('#tabbar');
    if (hide) {
      tabbar.classList.add("hide");
    } else {
      tabbar.classList.remove("hide");
    }
  }
}

const _spaService = new SpaService();
export default _spaService;