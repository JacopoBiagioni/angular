import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaratteristicheComponent } from './caratteristiche.component';

describe('CaratteristicheComponent', () => {
  let component: CaratteristicheComponent;
  let fixture: ComponentFixture<CaratteristicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaratteristicheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaratteristicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
