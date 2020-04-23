function changeEventOne(element) {
    console.log(element);
    console.log(element.checked);
    if (element.checked) {
        alert("Yeah, it's on!")
    }
}

function changeEventTwo(element) {
    console.log(element);
    console.log(element.checked);
    if (!element.checked) {
        alert("Oh, turning off!")
    }
}