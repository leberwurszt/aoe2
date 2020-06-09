import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivDetailComponent } from './civ-detail.component';

describe('CivInfoComponent', () => {
  let component: CivDetailComponent;
  let fixture: ComponentFixture<CivDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
