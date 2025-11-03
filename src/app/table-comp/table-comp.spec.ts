import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComp } from './table-comp';

describe('TableComp', () => {
  let component: TableComp;
  let fixture: ComponentFixture<TableComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
