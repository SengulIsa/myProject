import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductParentComp } from './product-parent-comp';

describe('ProductParentComp', () => {
  let component: ProductParentComp;
  let fixture: ComponentFixture<ProductParentComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductParentComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductParentComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
