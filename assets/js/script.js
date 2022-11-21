// №1

// const button = document.getElementById('btn'); // В константу button передаем кнопку с id btn
// button.addEventListener('click', setScroll); // Добавляем обработчик события. Если пользоавтель нажимает на кнопку, тогда выполняется функция
// const time = setTimeout(setScroll, 3000); //Записываем в константу setTimeout, чтобы через 3 секунды после нажатия на кнопку страница опускалась на 500 пикселей вниз

// function setScroll(){
//     setTimeout(() => {
//         window.scrollTo({ // По нажатию на кнопку начинает выполняться функция и спустя 3 секунды страница прокручаивается на 500 пикселей
//             top:500,
//             left:0,
//             behavior: "smooth"
//         });
//     }, 3000);
// }



// №2




// Задали константу, в которую записываем кнопку в html по ее id - btn.

// const btn = document.getElementById('btn');

// // // Добавляем слушатель события по клику.То есть когда мы нажимаем на кнопку, то запускается функция check.

// btn.addEventListener('click', check);

// // // Создаем функцию на проверку вертикальной прокрутки. 

// function check(){
//     if ((window.innerWidth - document.documentElement.clientWidth) > 0){ // Задаем условие, чтобы узнать есть ли прокрутка.
//         alert('На сайте есть вертикальная прокрутка!');
//     }
//     else{
//         alert('На сайте нет вертикальной прокрутки');
//     }
// }




// #3

// const btn = document.getElementById("button") // Задали константу, в которую записываем кнопку в html по ее id - button.
// const form = document.getElementById("form") // Задали константу, в которую записываем кнопку в html по ее id - form.
// btn.addEventListener("click",summa); Добавляем слушатель события по клику.То есть когда мы нажимаем на кнопку, то запускается функция summa.

// function summa(){
//     var sum = 0; 
// for(var i=0; i<form.length; i++){
//     sum = sum + Number(form[i].value) // Функция складывает все значения из инпутов
// }
//     console.log(sum)
//     let p = document.createElement("p")
//     form.appendChild(p)
//     p.innerHTML = sum
// }




// №4

// function Towns() { 
//     select = document.querySelector('#select'); 
//     selectElem = select[select.selectedIndex].innerHTML; 
 
//     // Вызываем список городов по нажатию кнопки
//     arr = { 
//         'Константин': ['Москва', 'Киев', 'Таганрог'], 
//         'Рыжков': ['Ростов', 'Воронеж', 'Чебоксары'], 
//         'Эдуардович': ['Краснодар', 'Тула', 'Казань'] 
//     } 
 
//     // Проверка на ключ
//     if (selectElem in arr) { 
//         // Создаем селекцию
//         createSelect = document.createElement('select'); 
//         document.body.appendChild(createSelect); 
//         for (let num = 0; num < arr[selectElem].length; num++) { 
//             // Создаем option 
//             createOption = document.createElement('option'); 
//             createOption.innerHTML = arr[selectElem][num]; 
//             createSelect.appendChild(createOption); 
//         } 
//     } 
// }

// #5

// const ol_js = document.getElementById('ol_html');
// const btn = document.getElementById('btn');
// btn.addEventListener('click', added); // Добавляем слушатель события по клику.То есть когда мы нажимаем на кнопку, то запускается функция added.

// function added(){
//     const li_js = document.createElement('li'); 
//     ol_js.appendChild(li_js); // Функция добваляет пункт по нажатию на кнопку
//     li_js.innerHTML = 'Пункт';
// }



// №6

// let elem = document.getElementsByTagName('a');
// for (let i = 0; i < elem.length; i++) {
//     elem[i].addEventListener('mouseover', over); // Создаем цикл, который добавляет каждый раз href, когда мы наводимся на ссылку <a>
// }
// function over() {
    // this.innerHTML = this.innerHTML + ' (' + this.href + ')'; 
// }



// #7

// const p = document.querySelectorAll("p") // Проходимся по всем тегам p

// for (let i = 0; i < p.length; i++) {
    // p[i].addEventListener('click', multiplication); //Добавляем слушатель, который реагирует на клик по кнопке
// }
// function multiplication() {
//     this.innerHTML = this.innerHTML * this.innerHTML; //После реагирования слушателя, выполняется умножение
// }




// #8

// Создаем функцию, которая считает каждый клик по кнопке. + немного css стилей;

// function go(){
//     const counter = document.getElementById('clicker'); //Берем input submit по его id - clicker и записываем в константу counter
//     counter.value = parseInt(counter.value) + 1; // Записываем новое значение в эту константу и сразу его делаем целочисленным значением - parseInt
//     counter.style = 'width: 200px; margin-bottom: 20px;'; //Немного css-стилей, которые добавляют красоты
// }


// #9

// let ul = document.getElementById("ul");


// //Добавляем слушатель по клику
// ul.addEventListener("click", function func(event) {
//     let li = event.target.closest("li");
//  if (li) { //Добавляем "!" в конец li при нажатии на него
//   li.innerHTML +="!"; 
//  }
// }); 
// let btn = document.getElementById("button");
// btn.addEventListener("click", function() {
//     let add = document.createElement("li");
//     add.innerHTML = "пункт"; //Добавляем новые пункты при нажатии
//     ul.appendChild(add);
// });

// #10

const form_second = document.querySelector('.form_second'); //Задали константу, в которую записываем форму из html по ее id - form_second.
    const getTable2 = document.querySelector('.task2'); 
    getForm2.submit.addEventListener('click', out_name);
    getTable2.addEventListener('click', go_name);
    function go_name(event) {
        const newValue = prompt("Исправить " + event.target.innerHTML, '');
        event.target.innerHTML = newValue;
    };
    function out_name(event) { //Задаем функцию, по которой добавляем в таблицу значения
    event.preventDefault();
    const createTdFirst = document.createElement('td');
    createTdFirst.innerHTML = getForm2.firstname.value;
    const createTdLast = document.createElement('td');
    createTdLast.innerHTML = getForm2.lastname.value;
    const createTr = document.createElement('tr');
    createTr.appendChild(createTdFirst);
    createTr.appendChild(createTdLast);
    getTable2.appendChild(createTr);
};
