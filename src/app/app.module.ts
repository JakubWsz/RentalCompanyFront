import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateBranchComponent } from './create-branch/create-branch.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { ConfigBranchComponent } from './config-branch/config-branch.component';
import {HttpClientModule} from "@angular/common/http";
import { ListBranchesComponent } from './list-branches/list-branches.component';

const routes: Routes = [
  {path: 'create-branch', component: CreateBranchComponent},
  {path: 'config-branch', component: ConfigBranchComponent},
  {path: 'list-branches', component: ListBranchesComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    CreateBranchComponent,
    ConfigBranchComponent,
    ListBranchesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
