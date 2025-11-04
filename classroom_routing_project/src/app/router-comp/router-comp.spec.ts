import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterComp } from './router-comp';

describe('RouterComp', () => {
  let component: RouterComp;
  let fixture: ComponentFixture<RouterComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
