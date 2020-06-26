import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core'

@Directive({
  selector: '[appGradientBackground]'
})
export class GradientBackground implements AfterViewInit {
  constructor(private elfRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.setStyle(
      this.elfRef.nativeElement.ownerDocument.body,
      'background',
      'linear-gradient(to bottom, #66CCCC, #66FF99'
    )
    this.renderer.setStyle(
      this.elfRef.nativeElement.ownerDocument.body,
      'backgroundAttachment',
      'fixed'
    )
  }
}
