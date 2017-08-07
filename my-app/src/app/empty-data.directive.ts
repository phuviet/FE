import { Directive, ElementRef, Component, Renderer, OnInit, Input, HostListener } from '@angular/core'

@Directive({
  selector: '[emptyData]'
})

export class EmptyDataDirective implements OnInit {

  @Input() emptyData: string;
  // @HostListener('mouseenter') onMouseEnter(){
  //   this.el.nativeElement.style.backgroundColor = 'blue';
  // }
  // @HostListener('mouseleave') onMouseLeave(){
  //   this.el.nativeElement.style.backgroundColor = '';
  // }

  constructor(private el: ElementRef, private renderer: Renderer) {

  }

  ngOnInit() {
    if(!this.emptyData) {
      // this.el.nativeElement.innerHTML = 'Empty'
      var birthday = this.renderer.createElement(this.el.nativeElement, 'span');
      birthday.style.fontStyle = 'italic';
      birthday.innerHTML = 'Empty';
      var parent = this.el.nativeElement.parentNode;
      parent.appendChild(birthday);
      this.el.nativeElement.remove();
    }
    else {
      this.el.nativeElement.innerHTML = this.emptyData
    }
  }
}
