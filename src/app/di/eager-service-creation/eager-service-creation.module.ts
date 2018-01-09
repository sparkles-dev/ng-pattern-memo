import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EagerService } from './eager.service';
import { LazyService } from './lazy.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    EagerService,
    LazyService
  ]
})
export class EagerServiceCreationModule {

  constructor(
    // Force eager (greedy) creation of the service by injecting in the providing module
    private eagerService: EagerService
  ) {}

}
