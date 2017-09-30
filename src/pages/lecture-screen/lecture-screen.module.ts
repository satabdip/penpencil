import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LectureScreenPage } from './lecture-screen';

@NgModule({
  declarations: [
    LectureScreenPage,
  ],
  imports: [
    IonicPageModule.forChild(LectureScreenPage),
  ],
})
export class LectureScreenPageModule {}
