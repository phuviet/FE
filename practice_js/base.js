// var $btn = document.getElementById(`js-submit`);
// var $input = document.getElementById(`js-name`);
// var $content = document.getElementById(`js-member`);
// $btn.addEventListener('click', printName);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var $btn = document.getElementById("js-submit");
var $input = document.getElementById("js-name");
var $content = document.getElementById("js-member");
var Member = (function () {
    function Member(name) {
        this.name = name;
        this.domElm = document.createElement('li');
        this.domElm.className = 'list-group-item';
        this.settingContent();
        this.addingButton();
    }
    Member.prototype.settingContent = function () {
        var $span = document.createElement('span');
        $span.innerHTML = this.name;
        this.domElm.appendChild($span);
    };
    Member.prototype.addingButton = function () {
        var $delBtn = document.createElement('button');
        $delBtn.className = 'btn btn-danger btn-xs pull-right';
        $delBtn.innerHTML = 'Delete';
        $delBtn.addEventListener('click', function (e) {
            var $parentElm = e.target.parentNode;
            $content.removeChild($parentElm);
        });
        this.domElm.appendChild($delBtn);
    };
    return Member;
}());
$btn.addEventListener('click', function () {
    var name = $input.value;
    var member = new Member(name);
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
var Carrier = (function () {
    function Carrier(name) {
        this.name = name;
        this.wheel = 2;
    }
    Carrier.prototype.info = function () {
        document.write("I am Honda " + this.name + ". I have " + this.wheel + " wheels.");
    };
    return Carrier;
}());
var Honda = (function (_super) {
    __extends(Honda, _super);
    function Honda(name) {
        var _this = _super.call(this, name) || this;
        _this.wheel = 4;
        return _this;
    }
    return Honda;
}(Carrier));
var honda = new Honda('Wave');
// honda.info();
var es6 = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (a, b) { return a + b; }, 0);
};
// alert(es6(1,2,3)) 
