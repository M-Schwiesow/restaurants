import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestReviewNewComponent } from './rest-review-new.component';

describe('RestReviewNewComponent', () => {
  let component: RestReviewNewComponent;
  let fixture: ComponentFixture<RestReviewNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestReviewNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestReviewNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
