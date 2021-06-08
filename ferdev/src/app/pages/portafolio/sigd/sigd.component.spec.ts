import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigdComponent } from './sigd.component';

describe('SigdComponent', () => {
  let component: SigdComponent;
  let fixture: ComponentFixture<SigdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
