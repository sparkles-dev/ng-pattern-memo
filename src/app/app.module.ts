import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EagerServiceCreationModule } from './di/eager-service-creation/eager-service-creation.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    EagerServiceCreationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
