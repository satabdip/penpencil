import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupdashboardPage } from '../signupdashboard/signupdashboard';
/**
 * Generated class for the VerifyOtpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verify-otp',
  templateUrl: 'verify-otp.html',
})
export class VerifyOtpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  homepage()
  {
   this.navCtrl.push(SignupdashboardPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyOtpPage');
  }

}
