import { Component, OnInit } from '@angular/core';
import {HttpClientService} from "../http-client.service";

@Component({
  selector: 'app-config-branch',
  templateUrl: './config-branch.component.html',
  styleUrls: ['./config-branch.component.css']
})
export class ConfigBranchComponent implements OnInit {
  configRentalCompany = {name: '', website: '', contactAddress: '', owner: ''}
  constructor(private httpService: HttpClientService) {
  }

  ngOnInit(): void {
  }

  createConfigRentalCompany(){
    this.httpService.configRentalCompany(this.configRentalCompany).subscribe(value =>{
      console.log(value);
      this.configRentalCompany = {name: '', website: '', contactAddress: '', owner: ''}
    },error => { console.log(error);
      alert(error.error.message)
    })
  }
}
