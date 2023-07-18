const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

// 유저 로그인하기
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME); // 로그인 폼 보이게하기
  const username = loginInput.value; // input의 value값
  localStorage.setItem(USERNAME_KEY, username); // 로컬스토리지에 저장
  paintGreetings(username);
}

// 로그인 환영 문구생성
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 로컬스토리지 USERNAME_KEY 가져오기
const savedUsername = localStorage.getItem(USERNAME_KEY);

// savedUsername 값이 없으면 로그인폼 생성 / 있다면 paintGreetings(savedUsername) 함수 실행
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
