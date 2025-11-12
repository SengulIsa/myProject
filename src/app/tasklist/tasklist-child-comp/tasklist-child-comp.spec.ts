import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistChildComp } from './tasklist-child-comp';

describe('TasklistChildComp', () => {
  let component: TasklistChildComp;
  let fixture: ComponentFixture<TasklistChildComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasklistChildComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasklistChildComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
