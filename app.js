const reviewList = [
    {
        id: 1,
        name: "tki3_flat_top",
        type: "flat_top_tsd",
        img: "./img/tsd_flat_top.png",
        text: "tki3의 한 종류로 평평한 후속 지형을 가져간다"
    },
    {
        id: 2,
        name: "tki3_castle_top",
        type: "castle_top_tsd",
        img: "./img/tsd_castle_top.png",
        text: "tki3의 한 종류인데 내가 잘 모른다"
    },
    {
        id: 3,
        name: "tki_fonzie",
        type: "fonzie_tsd",
        img: "./img/tsd_fonzie.png",
        text: "tki3의 한 종류로 가장 많이 쓰이고 후속 지형이 좋아 여러 상황에서 대처하기에 좋다"
    }
]
const mainImg = document.querySelector("#main-img");
const bulidName = document.querySelector("#build-name");
const type = document.querySelector("#type");
const info = document.querySelector("#info");

const preBtn = document.querySelector("#prev-btn")
const nextBtn = document.querySelector("#next-btn")

let currentIndex = 1;

window.addEventListener("DOMContentLoaded", function() {
    let item = reviewList[currentIndex];
    mainImg.src = item.img;
    bulidName.textContent = item.name;
    type.textContent = item.type;
    info.textContent = item.text;
});

function showReview(index) {
    const item = reviewList[index];
    mainImg.src = item.img;
    bulidName.textContent = item.name;
    type.textContent = item.type;
    info.textContent = item.text;   
}

preBtn.addEventListener("click", function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = reviewList.length -1;
    }
    showReview(currentIndex);
});

nextBtn.addEventListener("click", function() {
    currentIndex++;
    if (currentIndex >= reviewList.length) {
        currentIndex = 0 
    }
    showReview(currentIndex);
});