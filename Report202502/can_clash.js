window.onload = () => {
    window.scrollTo(0,0);
}

const canImage = document.getElementById("canImage");
const content1 = document.getElementById("content1");
const content1_span = content1.querySelector("span");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");
const content5 = document.getElementById("content5");

const ClashInterval = 50;

function canClash(interval) {
    canImage.src = "medias/Can.svg"
    setTimeout(() => {
        canImage.src = "medias/Can_Clash1.svg"
    }, interval * 1);
    setTimeout(() => {
        canImage.src = "medias/Can_Clash2.svg"
    }, interval * 2);
}

function canClashReverse(interval) {
    canImage.src = "medias/Can_Clash2.svg"
    setTimeout(() => {
        canImage.src = "medias/Can_Clash1.svg"
    }, interval * 1);
    setTimeout(() => {
        canImage.src = "medias/Can_Open.svg"
    }, interval * 2);
}

function canClashReverseLid(interval) {
    canImage.src = "medias/Can_Clash2.svg"
    setTimeout(() => {
        canImage.src = "medias/Can_Clash1.svg"
    }, interval * 1);
    setTimeout(() => {
        canImage.src = "medias/Can_Open.svg"
        content1_span.innerHTML += "<img id='lid' src='medias/Can_Lid.svg'>";
    }, interval * 2);
}

setTimeout(() => {
    canClash(ClashInterval);
}, 1000);

function scrollEvent_Content1(content, scrollThreshold) {
    let executed = false; // 1回だけ実行するためのフラグ
    window.addEventListener("scroll", () => {
        let contentScroll = -content.getBoundingClientRect().top;
        console.log(contentScroll);
        if (!executed && contentScroll >= scrollThreshold) {
            executed = true; // 再実行を防ぐ
            alert("test");
        }
    });
}

function scrollEvent_Content2(content, scrollThreshold) {
    let executed = false;
    window.addEventListener("scroll", () => {
        let contentScroll = -content.getBoundingClientRect().top;
        console.log(contentScroll);
        if (!executed && contentScroll >= scrollThreshold) {
            executed = true;
            alert("test");
        }
    });
}

scrollEvent_Content1(content1, 100);
scrollEvent_Content2(content2, 100);