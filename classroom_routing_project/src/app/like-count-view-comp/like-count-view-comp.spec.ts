import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeCountViewComp } from './like-count-view-comp';

describe('LikeCountViewComp', () => {
  let component: LikeCountViewComp;
  let fixture: ComponentFixture<LikeCountViewComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeCountViewComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeCountViewComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
