import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SVGMapSubComponent } from './svg-map-sub.component';

describe('SVGMapSubComponent', () => {
  let component: SVGMapSubComponent;
  let fixture: ComponentFixture<SVGMapSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SVGMapSubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SVGMapSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
