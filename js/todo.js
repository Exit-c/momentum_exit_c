const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

// 로컬스토리지에 저장하기
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 할 일 목록 삭제하기
function deleatToDo(event) {
  const li = event.target.parentElement; // 부모요소인 li
  li.remove(); // li 삭제
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // id가 일치하지 않는 항목만 남김
  saveToDos();
}

// 할 일 목록 추가하기
function paintToDo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  const button = document.createElement('button');
  button.innerText = 'X';
  button.addEventListener('click', deleatToDo); // 버튼태그 이벤트 생성
  // li의 자식요소로 추가
  li.appendChild(span);
  li.appendChild(button);
  // ul의 자식요소로 추가
  toDoList.appendChild(li);
}

// 입력한 값 submit
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); // toDos에 newTodoObj 값 넣기
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY); // 로컬스토리지 데이터 가져오기

// savedTodos 값이 있을 경우 할 일 목록 렌더링
if (savedTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos); // javascript 객체배열로 변환
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); // forEach() 주어진 배열의 모든 요소에 대해 반복하며, 각 요소에 대해 콜백 함수를 실행
}
