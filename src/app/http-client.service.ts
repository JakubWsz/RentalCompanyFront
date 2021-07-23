import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Branch} from "./model/Branch";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) {
  }

  configRentalCompany(rentalCompany: any) {
    return this.http.post("http://localhost:8080/rental-company/config", rentalCompany, {headers: this.getHeadersJson()});
  }

  registerBranch(address: String) {
    return this.http.post("http://localhost:8080/rental-company/open-new-branch", address, {headers: this.getHeadersText()});
  }

  listBranches() {
    return this.http.get<Branch[]>("http://localhost:8080/rental-company/get-all-branches", {responseType: 'json'});
  }

 private getHeadersText() {
    return new HttpHeaders({
      'Content-Type': 'text/plain'
    })
  }

  private getHeadersJson() {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
}
