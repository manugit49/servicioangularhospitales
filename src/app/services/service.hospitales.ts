import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";
import { Hospital } from "../models/hospital";

@Injectable()
export class ServiceHospitales {

    constructor(
        private _http: HttpClient
    ) {}

    async getHospitalesAsync(): Promise<any> {
        //Para el request miro en en elservicio api la ruta que necesito
        let request = "api/hospitales";
        //La url
        let url = environment.apiejemplos + request;
        return firstValueFrom(
            this._http.get<Hospital[]>(url)
        )
    }

    async deleteHospitalAsync(id: number): Promise<any> {
        let request = "api/hospitales/" + id;
        let url = environment.apiejemplos + request;
        console.log(url);
        return firstValueFrom(
            this._http.delete(url)
        )
    }

    async insertHospital(hospital: Hospital): Promise<any> {
        //Para el request
        let request = "api/hospitales"
        let url = environment.apiejemplos + request;
        let header = new HttpHeaders().set("content-type", "application/json")
        return firstValueFrom(
            this._http.post(url, hospital, { headers: header })
        )
    }
}