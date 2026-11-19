import { ChangeDetectorRef, Component } from '@angular/core';
import { ServiceHospitales } from '../../services/service.hospitales';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-delete-hospital-component',
  standalone: false,
  styleUrl: './delete-hospital-component.css',
  templateUrl: './delete-hospital-component.html',
})
export class DeleteHospitalComponent {
  mensaje!: string
  idhospital!: number

  constructor(
    private _service: ServiceHospitales,
    private _cdr: ChangeDetectorRef,
    private _active: ActivatedRoute
  ) {}

  async eliminarHospital(): Promise<void> {
    console.log(this.idhospital);
    await this._service.deleteHospitalAsync(this.idhospital);
    this.mensaje = "Hospital eliminado"
    console.log(this.mensaje);
    this._cdr.detectChanges()
  }

  async ngOnInit(): Promise<void> {
    let params = await firstValueFrom(this._active.params)
    let id = params['id']
    console.log(id);
    this.idhospital = id
    this._cdr.detectChanges()
  }
}
