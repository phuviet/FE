// var $btn = document.getElementById(`js-submit`);
// var $input = document.getElementById(`js-name`);
// var $content = document.getElementById(`js-member`);
// $btn.addEventListener('click', printName);

// DOM
// $btn.addEventListener(`click`, () => {
// 	var name = $input.value;

// 	var $span = document.createElement(`span`);
// 	$span.innerHTML = name;

// 	var $delBtn = document.createElement(`button`);
// 	$delBtn.innerHTML = `Delete`;
// 	$delBtn.className = `btn btn-danger btn-xs pull-right`;

// 	var $newMember = document.createElement(`li`);
// 	$newMember.className = `list-group-item`;
// 	$newMember.appendChild($span);
// 	$newMember.appendChild($delBtn);

// 	$content.appendChild($newMember);

// 	$delBtn.addEventListener(`click`, function(){
// 		var $parentElm = this.parentNode;
// 		$content.removeChild($parentElm);
// 	});
// });

//ES6
var $btn = document.getElementById(`js-submit`);
var $input = document.getElementById(`js-name`);
var $content = document.getElementById(`js-member`);

class Member{
	domElm: any;

	constructor(private name: string){
		this.domElm = document.createElement('li');
		this.domElm.className = 'list-group-item';
		this.settingContent();
		this.addingButton();
	}

	settingContent(){
		let $span = document.createElement('span');
		$span.innerHTML = this.name;
		this.domElm.appendChild($span);
	}

	addingButton(){
		let $delBtn = document.createElement('button');
		$delBtn.className = 'btn btn-danger btn-xs pull-right';
		$delBtn.innerHTML = 'Delete';
		$delBtn.addEventListener('click', (e) => {
			let $parentElm = e.target.parentNode;
			$content.removeChild($parentElm);
		});
		this.domElm.appendChild($delBtn);
	}
}

$btn.addEventListener('click', function(){
	let name: any = $input.value;
	let member = new Member(name);
	$content.appendChild(member.domElm);
});



// var arr = [];

// function printName() {
// 	if($input.value != ''){
// 		arr.push($input.value);
// 		// $content.innerHTML += `
// 		// 	${$input.value} 
// 		// 	<br/>
// 		// `;
// 		$content.innerHTML = `<ul>`;
// 		for(var i in arr){
// 			$content.innerHTML += `<li> ${arr[i]} <input type='button' name='delete' id='js-delete-${i}' value='Delete'> </li>`;
// 		}
// 		$content.innerHTML += `</ul>`
// 		$input.value = '';
// 	}
// 	else{
// 		$btn.setAttribute('disabled', true);
// 	}
// }

class Carrier{
	wheel: number;
	constructor(private name: string){
		this.wheel = 2;
	}
	info(){
		document.write(`I am Honda ${this.name}. I have ${this.wheel} wheels.`);
	}
}

class Honda extends Carrier {
	constructor(name: string) {
		super(name);
		this.wheel = 4;
	}
}


var honda = new Honda('Wave');
// honda.info();

var es6 = (...numbers) => numbers.reduce((a,b) => a + b, 0); 

// alert(es6(1,2,3))