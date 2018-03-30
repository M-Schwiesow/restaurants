import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestEditComponent } from './rest-edit.component';

describe('RestEditComponent', () => {
  let component: RestEditComponent;
  let fixture: ComponentFixture<RestEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
