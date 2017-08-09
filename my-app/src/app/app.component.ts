import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  members: Array<Object>;
  teams: Array<string>;
  memberForm: any;

  constructor(private formBuilder: FormBuilder){
    this.teams = [
    'FE', 'Ruby', 'PHP'
    ];
    this.members = [];

    this.memberForm = this.formBuilder.group({
      'personal': this.formBuilder.group({
        name: ['', [Validators.required]],
        birthday: ['', ],
        avatar: [''] 
      }),
      'company': this.formBuilder.group({
        joined: ['', ],
        team: ['', [Validators.required]]
      }),
      skills: []
    });
  }

  ngOnInit() {
    this.memberForm.controls.company.controls.team.valueChanges.subscribe(
      (data: string) => {
        // if (data === 'PHP') {
          this.memberForm.setControl('skills', new FormControl(this.memberForm.controls.skills.value, [Validators.required, this.checkSkillsByTeam]))
        // } else if (data === 'Ruby') {
          // this.memberForm.setControl('skills', new FormControl('', [Validators.required, this.checkSkillsRuby]))
        // } else {
          // this.memberForm.setControl('skills', new FormControl('', [Validators.required, this.checkSkillsFe]))
        // }
        // console.log(data);
        // let skill: FormControl = new FormControl('', [Validators.required, Validators.pattern(regex)])
        // this.memberForm.removeControl('skills');
        // this.memberForm.addControl('skills', skills);
        
      })
  }

  // checkSkillsPhp = (input: FormControl) => {
  //   return this.checkSkillsByTeam(input, 'Laravel')
  // }

  // checkSkillsRuby = (input: FormControl) => {
  //   return this.checkSkillsByTeam(input, 'Rails')
  // }

  // checkSkillsFe = (input: FormControl) => {
  //   return this.checkSkillsByTeam(input, 'Angular')
  // }

  // checkSkillsByTeam(input: FormControl, team: string) {
  //   const ind = input.value.indexOf(team) < 0;
  //   return ind ? { skillsInvalid: true } : null;
  // }

  checkSkillsByTeam = (input: FormControl) => {
    // console.log(this.memberForm.controls.company.controls.team.value);
    const team = this.memberForm.controls.company.controls.team.value;

    let hash = {
      'Ruby': /Rails|Ruby/,
      'FE': /CSS|HTML|JS/,
      'PHP': /Laravel|JS/
    }
    // return hash[Object.keys(hash).find(key => key === team)].test(input.value) ? null : { skillsInvalid: true }
    if (Object.keys(hash).includes(team)) {
      return hash[team].test(input.value) ? null : { skillsInvalid: true }
    }
    return { skillsInvalid: true }
    // switch (team) {
    //   case 'PHP':
    //     // code...
    //     return input.value.indexOf('Laravel') < 0 ? { skillsInvalid: true } : null;
    //   case 'FE':
    //     // code...
    //     return input.value.indexOf('CSS') < 0 ? { skillsInvalid: true } : null;
    //   case 'Ruby':
    //     // code...
    //     let regex = /Rails|Ruby/;
    //     console.log(regex.test(input.value));
    //     return regex.test(input.value) ? null : { skillsInvalid: true };
    // }
  }

  addMember(value: any) {
    // console.log(value);
    this.members.push(value);
  }

  editMember(member: any) {
    // console.log(this.memberForm.value);
    // console.log(member);
    this.memberForm.setValue(member);
  }

  deleteMember(index: number) {
    this.members.splice(index, 1);
  }
}
