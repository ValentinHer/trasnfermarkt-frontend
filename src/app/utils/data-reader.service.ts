import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataReaderService {

  constructor(private http: HttpClient) { }

  public getDataFromJson() {
    return this.http.get("/resultadosClubs.json");
  }
}
