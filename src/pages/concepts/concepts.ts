import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookmarksPage } from '../bookmarks/bookmarks';
@IonicPage()
@Component({
  selector: 'page-concepts',
  templateUrl: 'concepts.html',
})
export class ConceptsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
questions()
{
  this.navCtrl.push(BookmarksPage);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConceptsPage');
  }

}
