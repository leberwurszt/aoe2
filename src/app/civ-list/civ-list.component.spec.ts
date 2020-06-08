import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivListComponent } from './civ-list.component';

describe('CivListComponent', () => {
  let component: CivListComponent;
  let fixture: ComponentFixture<CivListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
