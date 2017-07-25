import { Component, ViewChild } from '@angular/core';

import { ListComponent } from './list.component'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./app.component.css']
})

export class FormComponent{
	@ViewChild(ListComponent) list: ListComponent;
	showName(){
		this.list.show();
	}
}
