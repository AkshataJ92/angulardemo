import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertabledisplayComponent } from './usertabledisplay.component';

describe('UsertabledisplayComponent', () => {
  let component: UsertabledisplayComponent;
  let fixture: ComponentFixture<UsertabledisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsertabledisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertabledisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
