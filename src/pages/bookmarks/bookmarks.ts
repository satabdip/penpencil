import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionsPage } from '../questions/questions';
import { ConceptsPage } from '../concepts/concepts';

@Component({
  templateUrl: 'bookmarks.html'
})
export class BookmarksPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
questions()
{

}

concepts()
{
  this.navCtrl.push(ConceptsPage);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad BookmarksPage');
  }

}
