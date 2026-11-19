import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeHospitalesComponent } from './components/home-hospitales-component/home-hospitales-component';
import { CreateHospitalComponent } from './components/create-hospital-component/create-hospital-component';
import { DeleteHospitalComponent } from './components/delete-hospital-component/delete-hospital-component';

const routes: Routes = [
  { path: "", component: HomeHospitalesComponent},
  { path: "create", component: CreateHospitalComponent},
  { path: "delete/:id", component: DeleteHospitalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
