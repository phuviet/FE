import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListTrainersComponent } from './list-trainers.component';
import { DetailTrainerComponent } from './details-trainer.component';
import { EmptyDataDirective } from './empty-data.directive'
import { ColorDataDirective } from './color-data.directive'
import { DefaultImageAvatarDirective } from './default-image.pipe'

import { TrainersService } from './trainers.service'
import { AppService } from './share/app.service'

@NgModule({
  declarations: [
    AppComponent,
    ListTrainersComponent,
    DetailTrainerComponent,
    EmptyDataDirective,
    ColorDataDirective,
    DefaultImageAvatarDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
  TrainersService,
  AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
