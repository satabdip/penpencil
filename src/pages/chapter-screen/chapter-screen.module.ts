import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChapterScreenPage } from './chapter-screen';

@NgModule({
  declarations: [
    ChapterScreenPage,
  ],
  imports: [
    IonicPageModule.forChild(ChapterScreenPage),
  ],
})
export class ChapterScreenPageModule {}
