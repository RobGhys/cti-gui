import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementDetailComponent } from './element-detail.component';

describe('DataDetailComponent', () => {
  let component: ElementDetailComponent;
  let fixture: ComponentFixture<ElementDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
