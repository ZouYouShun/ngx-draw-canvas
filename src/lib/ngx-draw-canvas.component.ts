import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-draw-canvas',
  template: `
  <canvas #signArea
    [width]="width"
    [height]="height"
    (panstart)="start($event)"
    (panmove)="move($event)"
    (panend)="end($event)"></canvas>
  `,
  styles: [
    `
    :host {
      display: inline-block;
    }
    `
  ]
})
export class NgxDrawCanvasComponent implements AfterViewInit {

  @ViewChild('signArea') signArea: ElementRef;

  @Input() width = 200;
  @Input() height = 100;
  @Input() lineWidth = 6;
  @Input() color = 'black';

  pen: CanvasRenderingContext2D;
  private tmpXY: ClientRect | DOMRect;

  constructor() { }

  ngAfterViewInit(): void {
    this.pen = this.signArea.nativeElement.getContext('2d');
  }

  start(e: HammerInput) {
    this.tmpXY = this.signArea.nativeElement.getBoundingClientRect();
    const { x, y } = this.getPenXY(e);
    this.pen.lineWidth = this.lineWidth;
    this.pen.strokeStyle = this.color;
    this.pen.beginPath();
    this.pen.moveTo(x, y);
  }

  move(e: HammerInput) {
    const { x, y } = this.getPenXY(e);
    this.pen.lineTo(x, y);
    this.pen.stroke();
  }

  end(e: HammerInput) {
    this.pen.closePath();
  }

  private getPenXY(e: HammerInput): { x: any; y: any; } {
    return { x: e.center.x - this.tmpXY.left, y: e.center.y - this.tmpXY.top };
  }

  clear() {
    this.pen.clearRect(0, 0, this.signArea.nativeElement.width, this.signArea.nativeElement.height);
  }

  toImage() {
    return this.signArea.nativeElement.toDataURL();
  }

}
