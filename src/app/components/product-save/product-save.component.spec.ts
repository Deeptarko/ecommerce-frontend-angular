import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSaveComponent } from './product-save.component';

describe('ProductSaveComponent', () => {
  let component: ProductSaveComponent;
  let fixture: ComponentFixture<ProductSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
