import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OtherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-other',
  templateUrl: 'other.html',
})
export class OtherPage {
  tabs: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherPage');
  }

  // scrollbars(index) { //animation slide delay && auto fucus ion-segment 
  //   let element = document.getElementById("scrollable");
  //   let scrollLeft = index * 10;
  //   let scrollInterval = setInterval(() => {

  //     if (index != 0) {
  //       if (element.scrollLeft < scrollLeft) {
  //         element.scrollLeft += 5;
  //       } else {
  //         element.scrollLeft -= 5;
  //       }
  //     } else {
  //       clearInterval(scrollInterval);
  //     }
  //     let scroll = scrollLeft - element.scrollLeft;
  //     if (scroll > 0) {
  //       if (scroll <= 100) {
  //         clearInterval(scrollInterval);
  //       }
  //     }

  //   }, 1);
  // }

}
