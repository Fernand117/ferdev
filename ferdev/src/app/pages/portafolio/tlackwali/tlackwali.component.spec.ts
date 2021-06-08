import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlackwaliComponent } from './tlackwali.component';

describe('TlackwaliComponent', () => {
  let component: TlackwaliComponent;
  let fixture: ComponentFixture<TlackwaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlackwaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlackwaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
