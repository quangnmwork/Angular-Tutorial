import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appOtherHighlight]',
})
export class OtherHighlightDirective implements OnInit {
  @Input() defaultFont: string = '16px';
  @HostBinding('style.fontSize') fontSize: string = '20px';
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'pink');
  }
  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'salmon');
    this.fontSize = this.defaultFont;
  }
  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'pink');
    this.fontSize = '20px';
  }
}
