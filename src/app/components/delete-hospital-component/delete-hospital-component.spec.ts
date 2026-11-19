import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteHospitalComponent } from './delete-hospital-component';

describe('DeleteHospitalComponent', () => {
  let component: DeleteHospitalComponent;
  let fixture: ComponentFixture<DeleteHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteHospitalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteHospitalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
