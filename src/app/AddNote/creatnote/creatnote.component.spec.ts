import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatnoteComponent } from './creatnote.component';

describe('CreatnoteComponent', () => {
  let component: CreatnoteComponent;
  let fixture: ComponentFixture<CreatnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatnoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
