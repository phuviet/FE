import { Directive, ElementRef, Component, Renderer, OnInit, Input, HostListener } from '@angular/core'

@Directive({
  selector: '[colorData]'
})

export class ColorDataDirective implements OnInit {

  @Input() colorData: string;

  constructor(private el: ElementRef, private renderer: Renderer) {

  }

  ngOnInit() {
    if(this.colorData === 'Ruby') {
      this.el.nativeElement.style.color = 'red';
    }
    else if(this.colorData === 'FE') {
      this.el.nativeElement.style.color = 'yellow';
    }
    else {
      this.el.nativeElement.style.color = 'blue';
    }
  }
}
