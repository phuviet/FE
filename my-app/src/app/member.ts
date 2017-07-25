var $content = document.getElementById('js-list');
export class Member {
	name: string;
	domElm: any;
	constructor(name){
		this.name = name;
		this.domElm = document.createElement('li');
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
		$delBtn.innerHTML = 'Delete';
		$delBtn.addEventListener('click', function() {
			let $parentElm = this.parentNode;
			$content.removeChild($parentElm);
		});
		this.domElm.appendChild($delBtn);
	}
}