import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookmarksPage } from '../bookmarks/bookmarks';

/**
 * Generated class for the SubinnerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subinner',
  templateUrl: 'subinner.html',
})
export class SubinnerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubinnerPage');
  }
bookmarks()
{
this.navCtrl.push(BookmarksPage);
}
}
