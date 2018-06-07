import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDrawCanvasComponent } from './ngx-draw-canvas.component';

describe('NgxDrawCanvasComponent', () => {
  let component: NgxDrawCanvasComponent;
  let fixture: ComponentFixture<NgxDrawCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDrawCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDrawCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
