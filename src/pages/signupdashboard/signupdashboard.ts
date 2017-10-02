import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
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

}
