const topContent = document.getElementById("topContent");
const canImage = document.getElementById("canImage");
const addImage = topContent.querySelector(".addImage");
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");
const content5 = document.getElementById("content5");
const content9 = document.getElementById("content9");
const content10 = document.getElementById("content10");
const content11 = document.getElementById("content11");
const content13 = document.getElementById("content13");
const content15 = document.getElementById("content15");
const content16 = document.getElementById("content16");
const content19 = document.getElementById("content19");
const content21 = document.getElementById("content21");
const content22 = document.getElementById("content22");
const content23 = document.getElementById("content23");

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
        addImage.innerHTML += "<img class='lid' src='medias/Can_Lid.svg'>";
        canImage.src = "medias/Can_Open.svg"
        addImage.innerHTML += "<img class='water' src='medias/Water.svg'>";
        addImage.innerHTML += "<img class='hotwater' src='medias/HotWater.svg'>";
        addImage.innerHTML += "<img class='grain' src='medias/Grain.svg'>";
        addImage.innerHTML += "<img class='air' src='medias/Air.svg'>";
        addImage.innerHTML += "<img class='hotair' src='medias/HotAir.svg'>";
        addImage.innerHTML += "<img class='h2o' src='medias/H2O.svg'>";
        addImage.innerHTML += "<img class='h2o2' src='medias/H2O.svg'>";
        addImage.innerHTML += "<img class='rightarrow' src='medias/Arrow.svg'>";
        addImage.innerHTML += "<img class='leftarrow' src='medias/Arrow.svg'>";
        addImage.innerHTML += "<img class='outsideleftarrow' src='medias/Arrow.svg'>";
        addImage.innerHTML += "<img class='outsiderightarrow' src='medias/Arrow.svg'>";
    }, interval * 2);
}

topCanClashPlay = true;

setTimeout(() => {
    if (window.scrollY <= 100 && topCanClashPlay) {
        canClash(ClashInterval);
    }
}, 1000);

function opacityAnimetion(object,opacity) {
    if (opacity == 1) {
        object.classList.remove("opacityMinAnimetion");
        object.classList.add("opacityMaxAnimetion");
    } else if (opacity == 0) {
        object.classList.remove("opacityMaxAnimetion");
        object.classList.add("opacityMinAnimetion");
    }
}

// function GrainVibrationSpeed(fromN,to,object) {
//     let from = fromN;
//     if (fromN == "n") {
//         from = object.style.animationDuration.replace("s","");
//     }
//     let moreThanFrom = false;
//     if (from > to) {
//         moreThanFrom = true;
//     }
//     let roop = from;
//     let roopInterval = setInterval(() => {
//         if (moreThanFrom && roop <= to || !moreThanFrom && roop > to) {
//             clearInterval(roopInterval);
//             // addImage.querySelector(".h2o").style.animationDuration = ".8s";
//         } else {
//             if (moreThanFrom) {
//                 roop = Math.floor((roop - .0001) * 1000) / 1000;
//             } else {
//                 roop = Math.floor((roop + .0001) * 1000) / 1000;
//             }
//             object.style.animationDuration = `${roop}s`;
//         }
//         // console.log(roop);
//     },1)
// }
// GrainVibrationSpeed(1.6,.8,addImage.querySelector(".h2o"))
// GrainVibrationSpeed(.8,1.6,addImage.querySelector(".h2o"))

function scrollEvent_Top(content, scrollThreshold) {
    let executed = false; // 1回だけ実行するためのフラグ
    window.addEventListener("scroll", () => {
        let contentScroll = -content.getBoundingClientRect().top;
        let contentScrollRatio = contentScroll / window.innerHeight + 1;

        // console.log(contentScrollRatio);
        if (!executed && contentScrollRatio >= scrollThreshold) {
            executed = true; // 再実行を防ぐ
            canClashReverseLid(ClashInterval);
            topCanClashPlay = false;
        }
        // 缶を潰す
    });
}

function lidOpen() {
    addImage.querySelector(".lid").classList.add("lidOpenAnimetion");
    addImage.querySelector(".lid").classList.remove("lidCloseAnimetion");
}

function lidClose() {
    addImage.querySelector(".lid").classList.add("lidCloseAnimetion");
    addImage.querySelector(".lid").classList.remove("lidOpenAnimetion");
}

function lidOpacityMin() {
    addImage.querySelector(".lid").classList.add("opacityMin");
    addImage.querySelector(".lid").classList.remove("opacityMax");
    addImage.querySelector(".lid").classList.remove("lidCloseAnimetion");
}

function lidOpacityMax() {
    addImage.querySelector(".lid").classList.add("opacityMax");
    addImage.querySelector(".lid").classList.remove("opacityMin");
    addImage.querySelector(".lid").classList.remove("lidCloseAnimetion");
}

function addWater() {
    addImage.querySelector(".water").classList.add("waterAddAnimetion");
}

function removeWater() {
    addImage.querySelector(".water").classList.remove("waterAddAnimetion");
}

function addHotWater() {
    addImage.querySelector(".hotwater").classList.add("waterAddAnimetion");
}

function removeHotWater() {
    addImage.querySelector(".hotwater").classList.remove("waterAddAnimetion");
}

function addAir() {
    addImage.querySelector(".air").classList.add("waterAddAnimetion");
}

function removeAir() {
    addImage.querySelector(".air").classList.remove("waterAddAnimetion");
}

function addCompressAir() {
    addImage.querySelector(".air").classList.remove("waterAddAnimetion");
    addImage.querySelector(".air").classList.add("compressAirAnimetion");
}

function removeCompressAir() {
    addImage.querySelector(".air").classList.remove("compressAirAnimetion");
    addImage.querySelector(".air").classList.remove("waterAddAnimetion");
}

function addHotAir() {
    addImage.querySelector(".hotair").classList.add("waterAddAnimetion");
}

function removeHotAir() {
    addImage.querySelector(".hotair").classList.remove("waterAddAnimetion");
    // addImage.querySelector(".hotair").classList.add("waterRemoveAnimetion");
}

function canOpacityHalf() {
    canImage.classList.add("opacityHalfAnimetion");
}

function canOpacityDefault() {
    canImage.classList.remove("opacityHalfAnimetion");
}

function grain_1AnimetionStart() {
    addImage.querySelector(".grain").classList.add("GrainAnimetions", "grain_1Animetion");
}

function grain_1AnimetionStop() {
    addImage.querySelector(".grain").classList.remove("GrainAnimetions", "grain_1Animetion");
}

function h2oAnimetionStart() {
    addImage.querySelector(".h2o").classList.remove("grain_1SlowAnimetion");
    addImage.querySelector(".h2o").classList.add("GrainAnimetions", "grain_1Animetion");
}

function h2oSlowAnimetionStart() {
    addImage.querySelector(".h2o").classList.add("grain_1SlowAnimetion");
    addImage.querySelector(".h2o").classList.remove("grain_1Animetion");
}

function h2oAnimetionStop() {
    addImage.querySelector(".h2o").classList.remove("grain_1SlowAnimetion");
    addImage.querySelector(".h2o").classList.remove("grain_1Animetion");
}

function canVibrationStart() {
    canImage.classList.add("canVibration");
}

function canVibrationStop() {
    canImage.classList.remove("canVibration");
}

function arrowCompressStart() {
    addImage.querySelector(".rightarrow").classList.add("rightArrowCompressAnimetion");
    addImage.querySelector(".leftarrow").classList.add("leftArrowCompressAnimetion");
    addImage.querySelector(".outsiderightarrow").classList.add("rightArrowSpreadAnimetion");
    addImage.querySelector(".outsideleftarrow").classList.add("leftArrowSpreadAnimetion");
}

function arrowCompressStop() {
    addImage.querySelector(".rightarrow").classList.remove("rightArrowCompressAnimetion");
    addImage.querySelector(".leftarrow").classList.remove("leftArrowCompressAnimetion");
    addImage.querySelector(".outsiderightarrow").classList.remove("rightArrowSpreadAnimetion");
    addImage.querySelector(".outsideleftarrow").classList.remove("leftArrowSpreadAnimetion");
}

function arrowSpreadStart() {
    addImage.querySelector(".outsiderightarrow").style.visibility = "";
    addImage.querySelector(".outsideleftarrow").style.visibility = "";
}

function arrowSpreadStop() {
    addImage.querySelector(".outsiderightarrow").style.visibility = "hidden";
    addImage.querySelector(".outsideleftarrow").style.visibility = "hidden";
}

function scrollEvent_Content1_1(content, scrollThreshold) {
    let executed = false; 
    window.addEventListener("scroll", () => {
        let contentScroll = -content.getBoundingClientRect().top;
        let contentScrollRatio = contentScroll / window.innerHeight + 1;

        // console.log(contentScrollRatio);
        if (!executed && contentScrollRatio >= scrollThreshold) {
            executed = true;
            setTimeout(() => {
                lidOpen();
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            lidClose();
        }
        // 缶を戻す､缶を開ける
    });
}

function scrollEvent_Content1_2(content, scrollThreshold) {
    let executed = false; 
    window.addEventListener("scroll", () => {
        let contentScroll = -content.getBoundingClientRect().top;
        let contentScrollRatio = contentScroll / window.innerHeight + 1;

        // console.log(contentScrollRatio);
        if (!executed && contentScrollRatio >= scrollThreshold) {
            executed = true; 
            setTimeout(() => {
                addWater();
                canOpacityHalf();
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            removeWater();
            canOpacityDefault();
        }
        // 水を追加
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
                addHotWater();
                canVibrationStart();
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            removeHotWater();
            canVibrationStop();
        }
        // 水を温める
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
                grain_1AnimetionStart();
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            grain_1AnimetionStop();
        }
        // 粒を揺らす
    });
}

function scrollEvent_Content3_1(content, scrollThreshold) {
    let executed = false;
    window.addEventListener("scroll", () => {
        let contentScroll = -content.getBoundingClientRect().top;
        let contentScrollRatio = contentScroll / window.innerHeight + 1;

        // console.log(contentScrollRatio);
        if (!executed && contentScrollRatio >= scrollThreshold) {
            executed = true;
            setTimeout(() => {
                lidClose();
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            lidOpen();
        }
        // フタを閉める
    });
}

function scrollEvent_Content3_2(content, scrollThreshold) {
    let executed = false;
    window.addEventListener("scroll", () => {
        let contentScroll = -content.getBoundingClientRect().top;
        let contentScrollRatio = contentScroll / window.innerHeight + 1;

        // console.log(contentScrollRatio);
        if (!executed && contentScrollRatio >= scrollThreshold) {
            executed = true;
            setTimeout(() => {
                lidOpacityMin();
                removeHotWater();
                canClash(ClashInterval);
                grain_1AnimetionStop();
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            lidOpacityMax();
            addHotWater();
            lidClose();
            grain_1AnimetionStart();
            canClashReverse(ClashInterval);
        }
        // 缶を潰す
    });
}

function scrollEvent_Content5_1(content, scrollThreshold) {
    let executed = false;
    window.addEventListener("scroll", () => {
        let contentScroll = -content.getBoundingClientRect().top;
        let contentScrollRatio = contentScroll / window.innerHeight + 1;

        // console.log(contentScrollRatio);
        if (!executed && contentScrollRatio >= scrollThreshold) {
            executed = true;
            setTimeout(() => {
                canClashReverse(ClashInterval);
                addHotAir();
                lidOpen();
                addHotWater();
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            canClash(ClashInterval);
            removeHotWater();
            removeHotAir();
        }
    });
}

function scrollEvent_Content9_1(content, scrollThreshold) {
    let executed = false;
    window.addEventListener("scroll", () => {
        let contentScroll = -content.getBoundingClientRect().top;
        let contentScrollRatio = contentScroll / window.innerHeight + 1;

        // console.log(contentScrollRatio);
        if (!executed && contentScrollRatio >= scrollThreshold) {
            executed = true;
            setTimeout(() => {
                addImage.querySelector(".hotwater").classList.add("opacityMinAnimetion");
                addImage.querySelector(".water").classList.add("opacityMinAnimetion");
                addImage.querySelector(".lid").classList.remove("opacityMin");
                setTimeout(() => {
                    removeHotWater();
                    removeWater();
                }, 1000);
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            addHotWater();
            addImage.querySelector(".hotwater").classList.add("opacityMin");
            lidOpacityMin();
        }
    });
}

function scrollEvent_Content10_1(content, scrollThreshold) {
    let executed = false;
    window.addEventListener("scroll", () => {
        let contentScroll = -content.getBoundingClientRect().top;
        let contentScrollRatio = contentScroll / window.innerHeight + 1;

        // console.log(contentScrollRatio);
        if (!executed && contentScrollRatio >= scrollThreshold) {
            executed = true;
            setTimeout(() => {
                lidClose();
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            lidOpen();
        }
    });
}

function scrollEvent_Content11_1(content, scrollThreshold) {
    let executed = false;
    window.addEventListener("scroll", () => {
        let contentScroll = -content.getBoundingClientRect().top;
        let contentScrollRatio = contentScroll / window.innerHeight + 1;

        // console.log(contentScrollRatio);
        if (!executed && contentScrollRatio >= scrollThreshold) {
            executed = true;
            setTimeout(() => {
                h2oAnimetionStart();
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            h2oAnimetionStop()
        }
    });
}

function scrollEvent_Content13_1(content, scrollThreshold) {
    let executed = false;
    window.addEventListener("scroll", () => {
        let contentScroll = -content.getBoundingClientRect().top;
        let contentScrollRatio = contentScroll / window.innerHeight + 1;

        // console.log(contentScrollRatio);
        if (!executed && contentScrollRatio >= scrollThreshold) {
            executed = true;
            setTimeout(() => {
                lidClose();
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            lidOpen();
            h2oAnimetionStop();
        }
    });
}

function scrollEvent_Content16_1(content, scrollThreshold) {
    let executed = false;
    window.addEventListener("scroll", () => {
        let contentScroll = -content.getBoundingClientRect().top;
        let contentScrollRatio = contentScroll / window.innerHeight + 1;

        // console.log(contentScrollRatio);
        if (!executed && contentScrollRatio >= scrollThreshold) {
            executed = true;
            setTimeout(() => {
                removeHotAir();
                addCompressAir();
                h2oSlowAnimetionStart();
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            addHotAir();
            removeCompressAir();
            h2oAnimetionStart();
        }
    });
}

function scrollEvent_Content19_1(content, scrollThreshold) {
    let executed = false;
    window.addEventListener("scroll", () => {
        let contentScroll = -content.getBoundingClientRect().top;
        let contentScrollRatio = contentScroll / window.innerHeight + 1;

        // console.log(contentScrollRatio);
        if (!executed && contentScrollRatio >= scrollThreshold) {
            executed = true;
            setTimeout(() => {
                removeCompressAir();
                arrowCompressStart();
                arrowSpreadStop();
                h2oAnimetionStop();
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            arrowCompressStop();
            h2oSlowAnimetionStart();
            addCompressAir();
        }
    });
}

function scrollEvent_Content22_1(content, scrollThreshold) {
    let executed = false;
    window.addEventListener("scroll", () => {
        let contentScroll = -content.getBoundingClientRect().top;
        let contentScrollRatio = contentScroll / window.innerHeight + 1;

        // console.log(contentScrollRatio);
        if (!executed && contentScrollRatio >= scrollThreshold) {
            executed = true;
            setTimeout(() => {
                arrowSpreadStart();
            }, 100)
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            arrowSpreadStop();
        }
    });
}

function scrollEvent_Content23_1(content, scrollThreshold) {
    let executed = false;
    window.addEventListener("scroll", () => {
        let contentScroll = -content.getBoundingClientRect().top;
        let contentScrollRatio = contentScroll / window.innerHeight + 1;

        // console.log(contentScrollRatio);
        if (!executed && contentScrollRatio >= scrollThreshold) {
            executed = true;
            setTimeout(() => {
                canClash(ClashInterval);
                lidOpacityMin();
                arrowCompressStop();
                arrowSpreadStart();
                h2oAnimetionStop();
            }, 100)
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            canClashReverse(ClashInterval);
            lidClose();
            arrowCompressStart();
            h2oAnimetionStart();
        }
    });
}

scrollEvent_Top(topContent, 1.);
scrollEvent_Content1_1(content1, .8);
scrollEvent_Content1_2(content1, .9);
scrollEvent_Content2_1(content2, .5);
scrollEvent_Content2_2(content2, 1);
scrollEvent_Content3_1(content3, .1);
scrollEvent_Content3_2(content3, .7);
scrollEvent_Content5_1(content5, .7);
scrollEvent_Content9_1(content9, .7);
scrollEvent_Content10_1(content10, .7);
scrollEvent_Content11_1(content11, .7);
scrollEvent_Content13_1(content13, .7);
scrollEvent_Content16_1(content16, .5);
scrollEvent_Content19_1(content19, .5);
scrollEvent_Content22_1(content22, .5);
scrollEvent_Content23_1(content23, .5);