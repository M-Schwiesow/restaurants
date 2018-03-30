import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestNewComponent } from './rest-new.component';

describe('RestNewComponent', () => {
  let component: RestNewComponent;
  let fixture: ComponentFixture<RestNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
