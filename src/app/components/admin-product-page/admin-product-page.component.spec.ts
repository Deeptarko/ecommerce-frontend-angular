import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductPageComponent } from './admin-product-page.component';

describe('AdminProductPageComponent', () => {
  let component: AdminProductPageComponent;
  let fixture: ComponentFixture<AdminProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
