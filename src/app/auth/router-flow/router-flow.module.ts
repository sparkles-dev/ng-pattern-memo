import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SecuredAreaComponent } from './secured-area.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, SecuredAreaComponent]
})
export class RouterFlowModule { }
