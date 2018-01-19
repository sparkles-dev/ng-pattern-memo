import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdPartyMessageBusService } from './third-party-message-bus.service';

const providers = [
  ThirdPartyMessageBusService
];

@NgModule({
  imports: [
    CommonModule
  ]
})
export class ThirdPartyMessageBusModule {

  public static forRoot(): ModuleWithProviders {

    return { ngModule: ThirdPartyMessageBusModule, providers };
  }
}
