import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhumanosComponent } from './rhumanos.component';

describe('RhumanosComponent', () => {
  let component: RhumanosComponent;
  let fixture: ComponentFixture<RhumanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhumanosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhumanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
