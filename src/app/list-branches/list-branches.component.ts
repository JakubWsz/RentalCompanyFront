import {Component, OnInit} from '@angular/core';
import {HttpClientService} from "../http-client.service";
import {Branch} from "../model/Branch";

@Component({
  selector: 'app-list-branches',
  templateUrl: './list-branches.component.html',
  styleUrls: ['./list-branches.component.css']
})
export class ListBranchesComponent implements OnInit {
  branches: Branch[] = [];

  constructor(private httpService: HttpClientService) {
  }

  ngOnInit(): void {
    this.getAllBranches();
  }

  getAllBranches() {
    this.httpService.listBranches().subscribe(branches => {
      this.branches = branches;
    });
  }

}
