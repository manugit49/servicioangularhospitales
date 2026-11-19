import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeHospitalesComponent } from './components/home-hospitales-component/home-hospitales-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceHospitales } from './services/service.hospitales';
import { CreateHospitalComponent } from './components/create-hospital-component/create-hospital-component';
import { DeleteHospitalComponent } from './components/delete-hospital-component/delete-hospital-component';

@NgModule({
  declarations: [
    App,
    HomeHospitalesComponent,
    MenuComponent,
    CreateHospitalComponent,
    DeleteHospitalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ServiceHospitales, provideHttpClient(), provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
