import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EagerServiceCreationModule } from './di/eager-service-creation/eager-service-creation.module';
import { AppComponent } from './app.component';
import { DemoModule } from './third-party-message-bus/demo.module';
import { ThirdPartyMessageBusModule } from './third-party-message-bus/third-party-message-bus.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    EagerServiceCreationModule,
    DemoModule,
    ThirdPartyMessageBusModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
