//toggle for hotspot 1
const hot1 = document.getElementsByClassName("hot-1");
hot1[0].addEventListener("click", () => {
    const frame = document.getElementsByClassName("hot1-frame");
    if (frame[0].classList.contains("hide")) {
        frame[0].classList.remove("hide");
    }
    else {
        frame[0].classList.add("hide");
    }
})


//toggle for hotspot 2
const hot2 = document.getElementsByClassName("hot-2");
hot2[0].addEventListener("click", () => {
    const frame = document.getElementsByClassName("hot2-frame");
    if (frame[0].classList.contains("hide")) {
        frame[0].classList.remove("hide");
    }
    else {
        frame[0].classList.add("hide");
    }
})


//toggle for hotspot 3
const hot3 = document.getElementsByClassName("hot-3");
hot3[0].addEventListener("click", () => {
    const frame = document.getElementsByClassName("hot3-text");
    if (frame[0].classList.contains("hide")) {
        frame[0].classList.remove("hide");
    }
    else {
        frame[0].classList.add("hide");
    }
})

