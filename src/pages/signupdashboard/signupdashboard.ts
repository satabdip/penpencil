import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MepagePage } from '../mepage/mepage';
import { SettingsPage } from '../settings/settings';

import { LectureScreenPage } from '../lecture-screen/lecture-screen';
import { ChapterScreenPage } from '../chapter-screen/chapter-screen';

/**
 * Generated class for the SignupdashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signupdashboard',
  templateUrl: 'signupdashboard.html',
})
export class SignupdashboardPage {
 tab1 = HomePage;
  tab2 = AboutPage;
  tab3 = ContactPage;
  tab4 = MepagePage;
  //tab5Root = SettingsPage;
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
