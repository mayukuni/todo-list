let list = document.getElementById('lista-tarefas'); //ol

// 5 e 6
const button = document.getElementById('criar-tarefa');
function addTask() {
  //  pegar o conteudo do input e adicionar como uma nova li da ol
  let inputValue = document.querySelector('input').value; //input
  const newValue = document.createElement('li'); //li
  newValue.appendChild(document.createTextNode(inputValue));
  list.appendChild(newValue);
  document.querySelector('input').value = '';
}
button.addEventListener('click', addTask);


// 7 
function changeColor(event) {
  let grayColor = 'rgb(128,128,128)';
  let clickedLi = event.target;
  clickedLi.style.backgroundColor = grayColor;     
}
list.addEventListener('click', changeColor);

// function changeColorPixel(event) {
//   const colorOfSelectedClass = document.getElementsByClassName('selected')[0].style.backgroundColor;
//   const clickedPixel = event.target;
//   clickedPixel.style.backgroundColor = colorOfSelectedClass;
// }
// board.addEventListener('click', changeColorPixel);

// 8
function removeSelectedClass() {
  let li = document.getElementsByTagName('li');
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].classList.value === 'selected') {
      li[index].className = '';
    }
  }
}

function changeSelectedClass(event) {
  removeSelectedClass();
  let clickedLi = event.target
  clickedLi.classList.add('selected');
}
list.addEventListener('click', changeSelectedClass);

// 9
function addCompletedClass(event) {
  let clickedLi = event.target
  clickedLi.classList.add('completed');
}
list.addEventListener('dblclick', addCompletedClass);

// 10
const clearButton = document.getElementById('apaga-tudo');
function clearAll() {
  list.innerHTML = ''
}
clearButton.addEventListener('click', clearAll)

// 11
const removeButton = document.getElementById('remover-finalizados');
function removeFinishedItems(){
  const finishedItems = document.getElementsByClassName('completed');
  while(finishedItems.length > 0){
      finishedItems[0].parentNode.removeChild(finishedItems[0]);
  }
}
removeButton.addEventListener('click', removeFinishedItems);






