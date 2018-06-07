import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxDrawCanvasComponent } from './ngx-draw-canvas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxDrawCanvasComponent
  ],
  exports: [
    NgxDrawCanvasComponent
  ]
})
export class NgxDrawCanvasModule { }
