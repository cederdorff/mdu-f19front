"use strict";

let teachers = [{
    name: "Birgitte Kirk Iversen",
    initials: "bki",
    mail: "bki@baaa.dk",
    phone: "72286316",
    address: "Sønderhøj 30, 8260 Viby J",
    position: "Senior Lecturer",
    department: "Multimedia Design",
    img: "https://www.baaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg"
  }, {
    name: "Maria Louise Bendixen",
    initials: "mlbe",
    mail: "mlbe@baaa.dk",
    phone: "72286345",
    address: "Ringvej Syd 104, 8260 Viby J",
    position: "Senior Lecturer",
    department: "Multimedia Design",
    img: "https://www.baaa.dk/media/b5ahrlra/maria-louise-bendixen.jpg"
  }, {
    name: "Kim Elkjær Marcher-Jepsen",
    initials: "kije",
    mail: "kije@baaa.dk",
    phone: "7228 6325",
    address: "Sønderhøj 30, 8260 Viby J",
    position: "Lecturer",
    department: "Multimedia Design",
    img: "https://www.baaa.dk/media/3zihz21l/kim-elkjaer-marcher-jepsen.jpg"
  },
  {
    name: "Rasmus Cederdorff",
    initials: "race",
    mail: "race@baaa.dk",
    phone: "72286318",
    address: "Sønderhøj 30, 8260 Viby J",
    position: "Lecturer",
    department: "Multimediedesigner & Professionsbachelor i digital konceptudvikling",
    img: "https://www.baaa.dk/media/devlvvgj/rasmus-cederdorff.jpg"
  }
];

console.log(teachers);

function appendTeachers(teachers) {
  for (let teacher of teachers) {
    console.log(teacher);
    document.querySelector("#grid-teachers").innerHTML += `
      <article>
        <img src='${teacher.img}'>
        <h3>${teacher.name}</h3>
        ${teacher.position}<br>
        <a href='mailto:${teacher.mail}'>${teacher.mail}</a>
      </article>
    `;

  }
}

appendTeachers(teachers);

function createTeacher() {
  // get the values from the input fields
  let name = document.querySelector('#add-teacher-form input[name=name]').value;
  let initials = document.querySelector('#add-teacher-form input[name=initials]').value;
  let mail = document.querySelector('#add-teacher-form input[name=mail]').value;
  let phone = document.querySelector('#add-teacher-form input[name=phone]').value;
  let img = document.querySelector('#add-teacher-form input[name=img]').value;
  let position = document.querySelector('#add-teacher-form input[name=position]').value;

  // create a new object
  let newteacher = {
    name: name,
    initials: initials,
    mail: mail,
    phone: phone,
    img: img,
    position: position
  };

  // push the new object to the array
  teachers.push(newteacher);

  // reset grid
  document.querySelector("#grid-teachers").innerHTML = "";
  // call appendTeachers to append all teachers again
  appendTeachers(teachers);
}