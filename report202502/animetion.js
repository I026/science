const topContent = document.getElementById("topContent");
const canImage = document.getElementById("canImage");
const addImage = topContent.querySelector(".addImage");
const content1 = document.getElementById("content1");
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
        addImage.innerHTML += "<img class='lid' style='opacity: 1;' src='medias/Can_Lid.svg'>";
        addImage.innerHTML += "<img class='water' src='medias/Water.svg'>";
        addImage.innerHTML += "<img class='hotwater' src='medias/HotWater.svg'>";
        addImage.innerHTML += "<img class='h2o' src='medias/H2O.svg'>";
        addImage.innerHTML += "<img class='h2o_2' src='medias/H2O.svg'>";
        addImage.innerHTML += "<img class='h2o_3' src='medias/H2O.svg'>";
        addImage.innerHTML += "<img class='h2o_4' src='medias/H2O.svg'>";
        addImage.innerHTML += "<img class='h2o_5' src='medias/H2O.svg'>";
    }, interval * 2);
}

setTimeout(() => {
    if (window.scrollY <= 100) {
        canClash(ClashInterval);
    }
}, 1000);

function scrollEvent_Top(content, scrollThreshold) {
    let executed = false; // 1回だけ実行するためのフラグ
    window.addEventListener("scroll", () => {
        let contentScroll = -content.getBoundingClientRect().top;
        let contentScrollRatio = contentScroll / window.innerHeight + 1;

        // console.log(contentScrollRatio);
        if (!executed && contentScrollRatio >= scrollThreshold) {
            executed = true; // 再実行を防ぐ
            canClashReverseLid(ClashInterval);
        }
    });
}

function scrollEvent_Content1(content, scrollThreshold) {
    let executed = false; 
    window.addEventListener("scroll", () => {
        let contentScroll = -content.getBoundingClientRect().top;
        let contentScrollRatio = contentScroll / window.innerHeight + 1;

        console.log(contentScrollRatio);
        if (!executed && contentScrollRatio >= scrollThreshold) {
            executed = true; 
            setTimeout(() => {
                addImage.querySelector(".lid").classList.add("lidOpenAnimetion");
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            addImage.querySelector(".lid").classList.remove("lidOpenAnimetion");
        }
    });
}

function scrollEvent_Content1_2(content, scrollThreshold) {
    let executed = false; 
    window.addEventListener("scroll", () => {
        let contentScroll = -content.getBoundingClientRect().top;
        let contentScrollRatio = contentScroll / window.innerHeight + 1;

        console.log(contentScrollRatio);
        if (!executed && contentScrollRatio >= scrollThreshold) {
            executed = true; 
            setTimeout(() => {
                addImage.querySelector(".water").classList.add("waterAddAnimetion");
                canImage.classList.add("opacityHalfAnimetion");
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            addImage.querySelector(".water").classList.remove("waterAddAnimetion");
            canImage.classList.remove("opacityHalfAnimetion");
        }
    });
}

function scrollEvent_Content2_1(content, scrollThreshold) {
    let executed = false;
    window.addEventListener("scroll", () => {
        let contentScroll = -content.getBoundingClientRect().top;
        let contentScrollRatio = contentScroll / window.innerHeight + 1;

        // console.log(contentScrollRatio);
        if (!executed && contentScrollRatio >= scrollThreshold) {
            executed = true;
            setTimeout(() => {
                addImage.querySelector(".hotwater").classList.add("waterAddAnimetion");
                canImage.classList.add("canVibration");
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            addImage.querySelector(".hotwater").classList.remove("waterAddAnimetion");
        }
    });
}

function scrollEvent_Content2_2(content, scrollThreshold) {
    let executed = false;
    window.addEventListener("scroll", () => {
        let contentScroll = -content.getBoundingClientRect().top;
        let contentScrollRatio = contentScroll / window.innerHeight + 1;

        // console.log(contentScrollRatio);
        if (!executed && contentScrollRatio >= scrollThreshold) {
            executed = true;
            setTimeout(() => {
                addImage.querySelector(".h2o").classList.add("H2OAnimetions", "H2O_1Animetion");
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            addImage.querySelector(".h2o").classList.remove("H2OAnimetions", "H2O_1Animetion");
        }
    });
}

scrollEvent_Top(topContent, 1.1);
scrollEvent_Content1(content1, .8);
scrollEvent_Content1_2(content1, .9);
scrollEvent_Content2_1(content2, .5);
scrollEvent_Content2_2(content2, 1);