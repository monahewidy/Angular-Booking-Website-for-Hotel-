import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewhotelComponent } from './addnewhotel.component';

describe('AddnewhotelComponent', () => {
  let component: AddnewhotelComponent;
  let fixture: ComponentFixture<AddnewhotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewhotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
