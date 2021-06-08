import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiviComponent } from './sivi.component';

describe('SiviComponent', () => {
  let component: SiviComponent;
  let fixture: ComponentFixture<SiviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
