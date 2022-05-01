import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceListFilterComponent } from './price-list-filter.component';

describe('PriceListFilterComponent', () => {
  let component: PriceListFilterComponent;
  let fixture: ComponentFixture<PriceListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceListFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
