import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { Hospital } from '../../models/hospital';
import { firstValueFrom } from 'rxjs';
import { ServiceHospitales } from '../../services/service.hospitales';

@Component({
  selector: 'app-create-hospital-component',
  standalone: false,
  styleUrl: './create-hospital-component.css',
  templateUrl: './create-hospital-component.html',
})
export class CreateHospitalComponent {
  @ViewChild('cajaid') cajaid!: ElementRef;
  @ViewChild('cajanombre') cajanombre!: ElementRef;
  @ViewChild('cajadireccion') cajadireccion!: ElementRef;
  @ViewChild('cajatelefono') cajatelefono!: ElementRef;
  @ViewChild('cajacamas') cajacamas!: ElementRef;
  mensaje!: string

  constructor(
    private _service: ServiceHospitales,
    private _cdr: ChangeDetectorRef
  ) {}

  async insertarHospital(): Promise<void> {
    let id = parseInt(this.cajaid.nativeElement.value);
    let nombre = this.cajanombre.nativeElement.value;
    let direccion = this.cajadireccion.nativeElement.value;
    let telefono = this.cajatelefono.nativeElement.value;
    let camas = parseInt(this.cajacamas.nativeElement.value);
    let hospital = new Hospital(id, nombre, direccion, telefono, camas);
    await this._service.insertHospital(hospital);
    this.mensaje = "Hospital insertado";
    this._cdr.detectChanges();
  }
}


