import { Component,Input} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VerifyOtpPage } from '../verify-otp/verify-otp';

/**
 * Generated class for the SendsmsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sendsms',
  templateUrl: 'sendsms.html',
})
export class SendsmsPage {
loadProgress: number = 0; 
phno:String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.phno=this.navParams.get('phno');
  
  //console.log("phone number is"+this.phno);
  }
verifyotp()
  {
  this.navCtrl.push(VerifyOtpPage);
  }
  ionViewDidLoad() {

  console.log("load progres is"+this.loadProgress);
     setInterval(() => {

      if(this.loadProgress < 100){
        this.loadProgress++;

        console.log("next progres is"+this.loadProgress);
      }

    }, 50);







    console.log('ionViewDidLoad SendsmsPage');
  }

}
