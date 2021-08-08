import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Branch} from '../model/Branch';
import {HttpClientService} from "../http-client.service";
import {AuthenticatorService} from "../authenticator.service";

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  branchId: number | undefined;
  branch: Branch = new Branch(0, "", false, "", null, null);

  constructor(private route: ActivatedRoute, private httpService: HttpClientService,
              private authenticator: AuthenticatorService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.branchId = params.id
      this.httpService.getBranch(this.branchId!).subscribe(branch => {
        this.branch = branch
        console.log(this.branch)
      });
      console.log(this.branchId)
    })
  }

  canChange(): boolean {
    return this.authenticator.isLoggedAs("MODERATOR");
  }
}
