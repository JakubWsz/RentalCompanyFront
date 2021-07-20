import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateBranchComponent } from './create-branch/create-branch.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { ConfigBranchComponent } from './config-branch/config-branch.component';
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {path: 'create-branch', component: CreateBranchComponent},
  {path: 'config-branch', component: ConfigBranchComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CreateBranchComponent,
    ConfigBranchComponent
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
