import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceListAppComponent } from './price-list-app.component';

describe('PriceListAppComponent', () => {
  let component: PriceListAppComponent;
  let fixture: ComponentFixture<PriceListAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceListAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceListAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
