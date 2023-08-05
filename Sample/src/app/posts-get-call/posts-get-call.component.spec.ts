import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsGetCallComponent } from './posts-get-call.component';

describe('PostsGetCallComponent', () => {
  let component: PostsGetCallComponent;
  let fixture: ComponentFixture<PostsGetCallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsGetCallComponent]
    });
    fixture = TestBed.createComponent(PostsGetCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
