import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    HttpModule
  ],
  exports: [
    ProfileComponent,
    FormsModule,
    NgbModule
  ],
  declarations: [
    ProfileComponent
  ],
  providers:[]
})
export class SharedModule { }
