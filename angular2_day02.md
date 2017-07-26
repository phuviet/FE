## Angular 2
### Component
> `Briefly explain Event Binding in Angular?`

- Event binding in Angular allows us to work in reverse from property binding. We can send information from the view, to the component class. Such information usually involves a click, hover or typing

Example: **button** element with onclick event by binding event in Angular.
```
#Click event in button element and will be define in component class.
<h3>New Member</h3>
<div class="">
	<input type="text" name="name" id="js-input" [(ngModel)]="name">
	<button type="button" name="button (click)="newMember()">Submit</button>
</div>
```
> `Briefly explain Data Binding in Angular?`

- Data binding in Angular allows us to work with elements which have dynamic's attribute value by by use binding data and we can set value for data from component class. We can use '[]' or prefix ''bind-'' to define a binding data.

Example: **img** element with 'src' attribute can change by define in component class in Angular 2.
```
import { Component } from '@angular/core';

@Component({
selector: 'my-app',
template: `
	<h1>My First Angular App</h1>
	<img [src]="imageUrl">
	<img bind-src="imageUrl">
`
})

export class AppComponent { 

imageUrl = 'https://angular.io/resources/images/logos/angular2/angular.png';

}
```
> `What are Event Emitters and how it works in Angular?`

- Event Emitters are the events in Angular with function to inform for parent component class that something has change and execute something we want. Import **Output** from **@angular/core** to child component class with usually has change and define variable as instance of **EventEmitter**, we can inform for parent component class that something has change in child component class.

> `Explain the life cycle hooks of Angular application?`

- A component has a lifecycle managed by Angular itself. Angular manages creation, rendering, data-bound properties etc. It also offers hooks that allow us to respond to key lifecycle events. Here is the complete lifecycle hook interface inventory:
```
* ngOnChanges - called when an input binding value changes
* ngOnInit - after the first ngOnChanges
* ngDoCheck - after every run of change detection
	+ ngAfterContentInit - after component content initialized
	+ ngAfterContentChecked - after every check of component content
	+ ngAfterViewInit - after component's view(s) are initialized
	+ ngAfterViewChecked - after every check of a component's view(s)
* ngOnDestroy - just before the component is destroyed
```

> `Explain the 'ContentChild' 'ContentChildren' and write an example?`

- ContentChild and ContentChildren in Angular 2 be used for parent component class which want to access to child component class with template of child component class be contained inside **< ng-content >< /ng-content >** and just access inside **< ng-content >< /ng-content >**. ContentChild and ContentChildren can access html element directly from **.html** file or template but ViewChild and ViewChildren can access in **.html** file. ContentChild return a component, ContentChildren return list as **QueryList<elements>**.

Example:
```
@Component({
  selector: 'app-footer',
  template: '<ng-content></ng-content>'
})
class FooterComponent {}

@Component(...)
class TodoAppComponent {
	@ContentChild(FooterComponent) footer: FooterComponent;
	@ContentChildren(FooterComponent) footers: QueryList<FooterComponent>
	ngAfterContentInit() {
	  // this.footer now points to the instance of `FooterComponent`
	}
}

@Component({
  selector: 'demo-app',
  template: `
    <content>
      <todo-app>
        <app-footer>
          <small>Yet another todo app!</small>
        </app-footer>
      </todo-app>
    </content>
  `
})
export class AppComponent {}
```

### Extra
> `Briefly explain ElementRef in Angular? Write an example.`

- ElementRef in Angular 2 provides access to the underlying native element (DOM element). An ElementRef is created for each element in the Template that contains a Directive, Component or data-binding.

Example:
```
import { Component, ViewChild, ElementRef } from '@angular/core'

@Component({
  selector: 'home',
  template: `
    <div>Test</div>
    <input type="text"#testElem>
    <input type="text"#testElem2>
  `
})


export class HomeComponent{

  @ViewChild('testElem') el:ElementRef;
  @ViewChild('testElem2') el2:ElementRef;

  ngAfterViewInit() {
    this.el.nativeElement.style.background = "red";
    this.el2.nativeElement.style.background = "blue";
  }

}
```
