import { Component, OnInit } from '@angular/core';
import {HttpClientService} from "../http-client.service";
import {BranchComponent} from "../branch/branch.component";

@Component({
  selector: 'app-patch-branch',
  templateUrl: './patch-branch-address.html',
  styleUrls: ['./patch-branch-address.css']
})
export class PatchBranchAddressComponent implements OnInit {
  patchBranchAddress = {name: '', website: '', contactAddress: '', owner: ''}
  branchId: BranchComponent = BranchComponent();

  constructor(private httpService: HttpClientService) { }

  ngOnInit(): void {
  }

  patchRentalCompany(){
  this.httpService.patchBranchAddress()
  }

}
