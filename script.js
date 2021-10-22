const list = document.getElementById('lista-tarefas'); // ol
const li = document.getElementsByTagName('li');

// 5 e 6
const button = document.getElementById('criar-tarefa');
function addTask() {
  //  pegar o conteudo do input e adicionar como uma nova li da ol
  const inputValue = document.querySelector('input').value; // input
  const newValue = document.createElement('li'); // li
  newValue.appendChild(document.createTextNode(inputValue));
  list.appendChild(newValue);
  document.querySelector('input').value = '';
}
button.addEventListener('click', addTask);

// 7 e 8
function removeSelectedClass() {
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].classList.contains('selected')) {
      li[index].classList.remove('selected');
    }
  }
}

function changeSelectedClass(event) {
  removeSelectedClass();
  const clickedLi = event.target;
  clickedLi.classList.add('selected');
}
list.addEventListener('click', changeSelectedClass);

function changeColor() {
  const grayColor = 'rgb(128,128,128)';
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].classList.contains('selected')) {
      li[index].style.backgroundColor = grayColor;
    } else {
      li[index].style.backgroundColor = 'white';
    }
  }
}
list.addEventListener('click', changeColor);

// 9
function addCompletedClass(event) {
  const clickedLi = event.target;
  clickedLi.classList.toggle('completed');
}
list.addEventListener('dblclick', addCompletedClass);

// function removeCompletedClass() {
//   const li = document.getElementsByTagName('li');
//   for (let index = 0; index < li.length; index += 1) {
//   if (li[index].classList.contains('completed')) {
//     li[index].classList.remove('completed');
//     }
//   }
// }
// list.addEventListener('dblclick', removeCompletedClass);

// 10
const clearButton = document.getElementById('apaga-tudo');
function clearAll() {
  list.innerHTML = '';
}
clearButton.addEventListener('click', clearAll);

// 11
const removeButton = document.getElementById('remover-finalizados');
function removeFinishedItems() {
  const finishedItems = document.getElementsByClassName('completed');
  while (finishedItems.length > 0) {
    finishedItems[0].parentNode.removeChild(finishedItems[0]);
  }
}
removeButton.addEventListener('click', removeFinishedItems);

// 12
// link de referência: https://stackoverflow.com/questions/58422340/trying-to-save-all-generated-li-elements-to-local-storage-using-javascript
const saveTasksButton = document.getElementById('salvar-tarefas');
function saveTasks() {
  const taskList = [];
  const className = [];
  for (let index = 0; index < li.length; index += 1) {
    taskList.push(li[index].innerHTML);
    className.push(li[index].className);
  }
  localStorage.setItem('taskList', JSON.stringify(taskList));
  localStorage.setItem('className', JSON.stringify(className));
}
saveTasksButton.addEventListener('click', saveTasks);

function loadTaskList() {
  const savedTasks = JSON.parse(localStorage.getItem('taskList'));
  const savedClass = JSON.parse(localStorage.getItem('className'));
  console.log(savedTasks);
  if (savedTasks) {
    for (let index = 0; index < savedTasks.length; index += 1) {
      const liValue = document.createElement('li');
      liValue.className = savedClass[index];
      liValue.innerHTML = savedTasks[index];
      list.appendChild(liValue);
    }
  }
}

loadTaskList();

// 13
// requisito feito com base no código do colega Lucas Teixeira.
const upButton = document.getElementById('mover-cima');
const downButton = document.getElementById('mover-baixo');

function moveToUp() {
  const selectedItem = document.getElementsByClassName('selected')[0];
  if (selectedItem !== list.firstChild && selectedItem) {
    selectedItem.previousSibling.before(selectedItem);
  }
}
upButton.addEventListener('click', moveToUp);

function moveToDown() {
  const selectedItem = document.getElementsByClassName('selected')[0];
  if (selectedItem !== list.lastChild && selectedItem) {
    selectedItem.nextSibling.after(selectedItem);
  }
}
downButton.addEventListener('click', moveToDown);

// 14
const removeSelectedButton = document.getElementById('remover-selecionado');

function removeSelected() {
  const selectedItem = document.getElementsByClassName('selected')[0];
  selectedItem.remove();
}
removeSelectedButton.addEventListener('click', removeSelected);
