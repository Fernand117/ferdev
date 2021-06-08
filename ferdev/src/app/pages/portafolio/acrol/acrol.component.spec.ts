import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrolComponent } from './acrol.component';

describe('AcrolComponent', () => {
  let component: AcrolComponent;
  let fixture: ComponentFixture<AcrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
