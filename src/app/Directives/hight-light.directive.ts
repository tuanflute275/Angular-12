import { Directive, ElementRef, Input } from '@angular/core';


@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective {
  @Input('appHighLight') appHighLight = 'blue';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.style.color = this.appHighLight;
  }
}
