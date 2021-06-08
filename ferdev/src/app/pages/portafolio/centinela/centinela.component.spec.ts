import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentinelaComponent } from './centinela.component';

describe('CentinelaComponent', () => {
  let component: CentinelaComponent;
  let fixture: ComponentFixture<CentinelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentinelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentinelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
