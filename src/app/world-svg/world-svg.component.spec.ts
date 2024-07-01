import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldSvgComponent } from './world-svg.component';

describe('WorldSvgComponent', () => {
  let component: WorldSvgComponent;
  let fixture: ComponentFixture<WorldSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorldSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
