//Task1
/*Создайте смешанный массив, например
[1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’].
Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.*/

// let task1 = [1, 2, 3, 'a', 'b', 'c', 4, 5, 6];
// let result = 0;
// for (var i = 0; i < task1.length; i++){
//   result += task1[i];
// }
// alert(result);

//Task2
/*Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
Добавьте в начало массива значение ‘Backbone.js’
Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
Добавьте в массив значение ‘CommonJS’ вторым элементом
Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”*/

  // let language = ['AngularJS', 'jQuery'];
  // language.unshift('Backbone.js');
  // language.push('ReactJS', 'Vue.js');
  // language.splice(2, 0, 'CommonJS');
  // let del = language.indexOf('jQuery');
  // language.splice(del, 1);
  // alert(del + ' jQuery ' + 'Это здесь лишнее');

//Task3
/*  Создайте массив из минимум 100 случайных целых чисел. Переберите массив и
  сгенерируйте на его основе новый, который содержит только уникальные
  (неповторяющиеся) значения исходного массива. Решите, используя только цикл for.*/
// let hundred = [];
// for (i = 0; i < 100; i++){
//   hundred[i] = Math.random();
// }
//
// let hundred2 = [];
// for (i = 0; i < 100; i++){
//   let hundred2Value = Math.random();
//   if (hundred2Value != hundred[i]){
//     hundred2[i] = hundred2Value;
//   }
// }
// console.log(hundred);
// console.log(hundred2);

//Task4
/*Создайте строку с текстом ‘Как однажды Жак звонарь сломал городской
фонарь’. Разбейте ее на массив слов, и переставьте слова в правильном порядке
с помощью любых методов массива (indexOf, splice ...). Затем объедините
элементы массива в строку и выведите в alert исходный и итоговый варианты.*/

// let mnemonic = 'Как однажды Жак звонарь сломал городской фонарь';
// let word = mnemonic.split(' ');
// let wrong = word.indexOf('городской');
// word.splice(wrong, 1);
// word.splice(4, 0, 'городской');
// let mnemonicRight = word.join(' ');
// console.log(mnemonicRight);

//Task5
/*Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt
для ввода любых символов, полученное значение добавляйте в конец созданного
массива. После выхода из цикла посчитайте сумму всех чисел массива и выведите
в alert полученный результат.*/

let arr = [];
let n = 1;
  for (let i = 0; i < n;i++){
    let value = prompt('Enter value');
    if (value === null) break;
    n++;
    arr[i] = value;

  }
  let summ = 0;
  for (let i = 0; i < arr.length; i++){
    let a = Number(arr[i]);
    let chek = a + a;
    if(isNaN(a)){
    }
		else{
			summ += +arr[i];
		}
  }

alert(summ);

//Task6
/*Используя вложенные циклы, сформируйте двумерный массив,
содержащий таблицу умножения*/
// let mult = [];
// for (let i = 0; i < 10; i++){
//   mult[i] = new Array();
// }
//   // let factor2 = [];
//   for (let i = 0; i < 10; i++){
//     let factor1 = i +1;
//     for (j = 0; j < 10; j++){
//       let factor2 = j + 1;
//       mult[i][j] = `${factor1}*${factor2}=${factor1*factor2}`;
//     }
// }
// console.log(mult);


//Task7
/*я была близка, несколько моментов побороть не смогла - высоту шапки, пляшет от
ячейки к ячейке и некоторые значения вылазят в False. Ну и, как по мне,
для такого задания уж много написано*/
let head = ['', true, false, 1, 0, '""', '"1"', "0", 'null', 'undefined', '{}', '[]', NaN];

let $table = $('<table>').appendTo('body');
$("table").css("height","250px");
let $tr = $('<tr>').appendTo($table);
	for (let i = 0; i < head.length; i++) {
    let $td =	$('<td>').appendTo($tr).text(head[i]);
	}
$("td").addClass("head");

let $tr2 = $('<tr>').appendTo($table);
  let value = ['if (value)', true, false, 1, 0, '""', '"1"', "0", 'null', 'undefined', '{}', '[]', NaN];
  for (let i = 0; i < value.length; i++) {
		let item = value[i];
		if (item == true) {
			let $td =	$('<td class="bodyTrue">').appendTo($tr2).text(value[i]);
		}
		else {
			let $td =	$('<td class="bodyFalse">').appendTo($tr2).text(value[i]);
		}
  }
$("tr td").css({"font-size":"30px", "height":"100px", "width":"100px", "border-collapse":"collapse"});
$("tr td.head").css({"background-color":"#f3efef",  "transform":"rotate(90deg)", "height":"140px", "width":"170px", "padding":"0 0 0 10px", "box-sizing":"border-box"});

$("td.bodyTrue").css({"background-color":"#99C54E", "color":"#99C54E"});
$("td.bodyFalse").css({"background-color":"	#ffbdbd", "color":"#ffbdbd"});
$("tr td:first-child").css({"background-color":"inherit", "color":"black"});
