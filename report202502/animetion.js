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

function scrollEvent_Content1_1(content, scrollThreshold) {
    let executed = false; 
    window.addEventListener("scroll", () => {
        let contentScroll = -content.getBoundingClientRect().top;
        let contentScrollRatio = contentScroll / window.innerHeight + 1;

        // console.log(contentScrollRatio);
        if (!executed && contentScrollRatio >= scrollThreshold) {
            executed = true; 
            setTimeout(() => {
                addImage.querySelector(".lid").classList.add("lidOpenAnimetion");
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            addImage.querySelector(".lid").classList.remove("lidOpenAnimetion");
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
                addImage.querySelector(".water").classList.add("waterAddAnimetion");
                canImage.classList.add("opacityHalfAnimetion");
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            addImage.querySelector(".water").classList.remove("waterAddAnimetion");
            canImage.classList.remove("opacityHalfAnimetion");
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
                addImage.querySelector(".hotwater").classList.add("waterAddAnimetion");
                canImage.classList.add("canVibration");
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            addImage.querySelector(".hotwater").classList.remove("waterAddAnimetion");
            canImage.classList.remove("canVibration");
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
                addImage.querySelector(".grain").classList.add("GrainAnimetions", "Grain_1Animetion");
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            addImage.querySelector(".grain").classList.remove("GrainAnimetions", "Grain_1Animetion");
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
                addImage.querySelector(".lid").classList.remove("lidOpenAnimetion");
                addImage.querySelector(".lid").classList.add("lidCloseAnimetion");
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            addImage.querySelector(".lid").classList.add("lidOpenAnimetion");
            addImage.querySelector(".lid").classList.remove("lidCloseAnimetion");
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
                addImage.querySelector(".lid").classList.add("opacityMin");
                addImage.querySelector(".hotwater").classList.remove("waterAddAnimetion");
                addImage.querySelector(".hotwater").classList.add("opacityMin");
                canClash(ClashInterval);
                addImage.querySelector(".lid").classList.remove("lidCloseAnimetion");
                addImage.querySelector(".grain").classList.remove("GrainAnimetions", "Grain_1Animetion");
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            addImage.querySelector(".lid").classList.remove("opacityMin");
            addImage.querySelector(".hotwater").classList.add("waterAddAnimetion");
            addImage.querySelector(".lid").classList.add("lidCloseAnimetion");
            addImage.querySelector(".grain").classList.add("GrainAnimetions", "Grain_1Animetion");
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
                addImage.querySelector(".hotair").classList.add("waterAddAnimetion");
                setTimeout(() => {
                    // addImage.querySelector(".lid").classList.add("opacityMin");
                    addImage.querySelector(".lid").classList.add("lidOpenAnimetion");
                }, 100);
                // addImage.querySelector(".lid").classList.remove("lidCloseAnimetion");
                addImage.querySelector(".hotwater").classList.add("waterAddAnimetion");
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            canClash(ClashInterval);
            addImage.querySelector(".lid").classList.remove("lidOpenAnimetion");
            // addImage.querySelector(".lid").classList.add("lidCloseAnimetion");
            addImage.querySelector(".hotwater").classList.remove("waterAddAnimetion");
            addImage.querySelector(".hotair").classList.remove("waterAddAnimetion");
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
                    addImage.querySelector(".hotwater").classList.remove("waterAddAnimetion");
                    addImage.querySelector(".water").classList.remove("waterAddAnimetion");
                }, 1000);
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            addImage.querySelector(".hotwater").classList.add("waterAddAnimetion");
            addImage.querySelector(".hotwater").classList.add("opacityMin");
            addImage.querySelector(".lid").classList.add("opacityMin");
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
                addImage.querySelector(".lid").classList.add("lidCloseAnimetion");
                addImage.querySelector(".lid").classList.remove("lidOpenAnimetion");
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            addImage.querySelector(".lid").classList.add("lidOpenAnimetion");
            addImage.querySelector(".lid").classList.remove("lidCloseAnimetion");
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
                addImage.querySelector(".lid").classList.add("lidCloseAnimetion");
                addImage.querySelector(".lid").classList.remove("lidOpenAnimetion");
                addImage.querySelector(".h2o").classList.add("GrainAnimetions", "Grain_1Animetion");
                addImage.querySelector(".h2o").style.animationDuration = "1.6s";
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            addImage.querySelector(".lid").classList.add("lidOpenAnimetion");
            addImage.querySelector(".lid").classList.remove("lidCloseAnimetion");
            addImage.querySelector(".h2o").classList.remove("GrainAnimetions", "Grain_1Animetion");
            addImage.querySelector(".h2o").style.animationDuration = ".8s";
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
                addImage.querySelector(".lid").classList.add("lidCloseAnimetion");
                addImage.querySelector(".lid").classList.remove("lidOpenAnimetion");
                addImage.querySelector(".h2o").style.animationDuration = "1.6s";
                // let roopInterval = setInterval(() => {
                //     if (roop <= .8) {
                //         clearInterval(roopInterval);
                //         // addImage.querySelector(".h2o").style.animationDuration = ".8s";
                //     } else {
                //         // roop = `${roop.replace("s","") - .001}s`;
                //         roop = Math.floor((roop - .002) * 1000) / 1000;
                //         addImage.querySelector(".h2o").style.animationDuration = `${roop}s`;
                //     }
                //     console.log(roop);
                // },5)
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            addImage.querySelector(".lid").classList.add("lidOpenAnimetion");
            addImage.querySelector(".lid").classList.remove("lidCloseAnimetion");
            addImage.querySelector(".h2o").style.animationDuration = ".8s";
        }
    });
}

function scrollEvent_Content15_1(content, scrollThreshold) {
    let executed = false;
    window.addEventListener("scroll", () => {
        let contentScroll = -content.getBoundingClientRect().top;
        let contentScrollRatio = contentScroll / window.innerHeight + 1;

        // console.log(contentScrollRatio);
        let roop;
        if (!executed && contentScrollRatio >= scrollThreshold) {
            executed = true;
            setTimeout(() => {
                addImage.querySelector(".hotair").classList.remove("waterAddAnimetion");
                addImage.querySelector(".air").classList.add("waterAddAnimetion");
                addImage.querySelector(".h2o").classList.add("opacityMin200msAnimetion");
                addImage.querySelector(".h2o").style.animationDuration = ".8s";
            }, 100);
        } else if (executed && contentScrollRatio < scrollThreshold) {
            executed = false;
            addImage.querySelector(".hotair").classList.add("waterAddAnimetion");
            addImage.querySelector(".air").classList.remove("waterAddAnimetion");
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
scrollEvent_Content15_1(content15, .7);