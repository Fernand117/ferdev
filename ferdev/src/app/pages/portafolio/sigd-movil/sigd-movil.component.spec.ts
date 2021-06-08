import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigdMovilComponent } from './sigd-movil.component';

describe('SigdMovilComponent', () => {
  let component: SigdMovilComponent;
  let fixture: ComponentFixture<SigdMovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigdMovilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigdMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
