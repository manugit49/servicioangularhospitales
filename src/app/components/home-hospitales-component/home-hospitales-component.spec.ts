import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeHospitalesComponent } from './home-hospitales-component';

describe('HomeHospitalesComponent', () => {
  let component: HomeHospitalesComponent;
  let fixture: ComponentFixture<HomeHospitalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeHospitalesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeHospitalesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
