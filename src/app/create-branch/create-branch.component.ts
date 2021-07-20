import {Component, OnInit} from '@angular/core';
import {HttpClientService} from "../http-client.service";

@Component({
  selector: 'app-create-branch',
  templateUrl: './create-branch.component.html',
  styleUrls: ['./create-branch.component.css']
})
export class CreateBranchComponent implements OnInit {
  branch: string = "";
  constructor(private httpService: HttpClientService) {
  }

  ngOnInit(): void {

  }

  createBranch(){
    if (this.branch.length < 2 || this.branch.length > 20){
      return;
    }
    this.httpService.registerBranch(this.branch).subscribe(() => this.branch = "");
  }
}
