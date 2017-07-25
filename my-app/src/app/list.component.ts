import { Component } from '@angular/core';

import { Member } from './member'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./app.component.css']
})

export class ListComponent {
	show(){
		alert('123');
	}
}
