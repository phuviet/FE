import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  // @Input('options') option: any;
  members: Array<Object>;
  memberForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.members = [];

    this.memberForm = this.formBuilder.group({
      'personal': this.formBuilder.group({
        name: ['', Validators.required ],
        birthday: ['', Validators.required],
        avatar: ['']
      }),
      'company': this.formBuilder.group({
        joined: ['', Validators.required],
        team: ['---Chose team---', Validators.required]
      }),
      'skills': this.formBuilder.group({
        skill: ['', Validators.required]
      })
    });

    this.memberForm.valueChanges.subscribe((data) => {
      console.log('Form change', this.memberForm.controls.company['team']);
    })
  }

  ngOnInit() {

    
  }

  ngOnChanges() {
  }
  // changeOption(value: any) {
  //   switch (value) {
  //     case "Ruby":
  //       // code...
  //       let regex = 'Ruby'
  //       break;
  //     case "PHP":
  //       break;
  //     case "FE":
  //       break;
  //     default:
  //       // code...
  //       break;
  //   }
  // }

  addMember() {
  }
}
