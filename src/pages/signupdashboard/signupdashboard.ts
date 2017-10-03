import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MepagePage } from '../mepage/mepage';
import { SettingsPage } from '../settings/settings';
import { LectureScreenPage } from '../lecture-screen/lecture-screen';
import { ChapterScreenPage } from '../chapter-screen/chapter-screen';
import { StorePage } from '../store/store';
import { TestPage } from '../test/test';
import { CoursePage } from '../course/course';


@IonicPage()
@Component({
  selector: 'page-signupdashboard',
  templateUrl: 'signupdashboard.html',
})
export class SignupdashboardPage {
 tab1 = StorePage;
  tab2 = TestPage;
  tab3 = CoursePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupdashboardPage');
  }
  nextPage(){
    this.navCtrl.push(LectureScreenPage);
  }

  chapterPage(){
    this.navCtrl.push(ChapterScreenPage);
  }

}
