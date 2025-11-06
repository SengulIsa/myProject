import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalCounterViewComp } from './local-counter-view-comp';

describe('LocalCounterViewComp', () => {
  let component: LocalCounterViewComp;
  let fixture: ComponentFixture<LocalCounterViewComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalCounterViewComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalCounterViewComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
