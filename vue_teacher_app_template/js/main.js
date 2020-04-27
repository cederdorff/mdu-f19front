"use strict";

let app = new Vue({
  el: '#app',
  data: {
    teachers: [{
      name: "Birgitte Kirk Iversen",
      mail: "bki@baaa.dk",
      position: "Senior Lecturer",
      img: "https://www.baaa.dk/CropUp/headshot/media/1524902/birgitte-kirk-iversen.jpg"
    }, {
      name: "Gertie Margrethe Kolding Jensen",
      mail: "gkj@baaa.dk",
      position: "Senior Lecturer",
      img: "https://www.eaaa.dk/CropUp/headshot/media/2046228/Gertie-Kolding.jpg"
    }, {
      name: "Kim Elkjær Marcher-Jepsen",
      mail: "kije@baaa.dk",
      position: "Lecturer",
      img: "https://www.baaa.dk/CropUp/headshot/media/3124373/Kim-Elkjaer-Marcher-Jepsen.jpg"
    }],
    newTeacher: {
      name: "",
      mail: "",
      position: "",
      img: ""
    },
  },
  methods: {
    addNewTeacher() {
      this.teachers.push(this.newTeacher);
    }
  }
});