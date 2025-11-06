import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalCounterView } from './local-counter-view';

describe('LocalCounterView', () => {
  let component: LocalCounterView;
  let fixture: ComponentFixture<LocalCounterView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalCounterView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalCounterView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
