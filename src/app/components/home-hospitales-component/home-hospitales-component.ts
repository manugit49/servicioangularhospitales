import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital';
import { ServiceHospitales } from '../../services/service.hospitales';

@Component({
  selector: 'app-home-hospitales-component',
  standalone: false,
  styleUrl: './home-hospitales-component.css',
  templateUrl: './home-hospitales-component.html',
})
export class HomeHospitalesComponent implements OnInit{
  arrayhospitales!: Hospital[]

  constructor(
    private _service: ServiceHospitales,
    private _cdr: ChangeDetectorRef
  ) {}

  async ngOnInit(): Promise<void> {
    this.arrayhospitales = await this._service.getHospitalesAsync();
    this._cdr.detectChanges();
  }
}
