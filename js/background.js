const images = ['0.jpg', '1.jpg', '2.jpg'];

const chosnImage = images[Math.floor(Math.random() * images.length)]; // images의 배열 수만큼 랜덤 인덱스 도출

const bgImage = document.createElement('img'); // img태그 생성

bgImage.src = `img/${chosnImage}`; // bgImage의 src경로 지정

document.body.appendChild(bgImage); // body의 자식요소로 추가
