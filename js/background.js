const images = [
    "1.jpeg", "2.jpg", "3.jpg", "4.jpg"
];

const chosenImages = images[Math.floor(Math.random()*images.length)];

// html에 <img /> 를 생성하고 
// const bgImage = document.createElement("img");

const bgImage = document.querySelector(".mainScreen img");

//img폴더에 랜덤이미지를  생성한 bgImage에 <img src="" /> 안에 넣는다    
bgImage.src = `img/${chosenImages}`;

//html에 bgImage를 추가한다 참고: prepend는 맨앞에 붙는다 append 맨뒤에 붙음
// document.body.appendChild(bgImage);