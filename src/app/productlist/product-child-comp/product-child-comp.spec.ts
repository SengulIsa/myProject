import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductChildComp } from './product-child-comp';

describe('ProductChildComp', () => {
  let component: ProductChildComp;
  let fixture: ComponentFixture<ProductChildComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductChildComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductChildComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
