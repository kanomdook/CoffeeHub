import { ShopLocationPage } from '../shop-location/shop-location';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ActivityPage } from '../activity/activity';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private dataListX: Array<any> = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.dataListX = [{
      title: '7 Delively',
      image: 'http://chiangmai.siamdot.com/wp-content/uploads/2016/07/7-11-Grab-6.jpg'
    }, {
      title: 'สแตมป์',
      image: 'http://chiangmai.siamdot.com/wp-content/uploads/2016/07/7-11-Grab-6.jpg'
    }, {
      title: 'แลกคะแนน',
      image: 'http://chiangmai.siamdot.com/wp-content/uploads/2016/07/7-11-Grab-6.jpg'
    }, {
      title: 'บริการ',
      image: 'http://chiangmai.siamdot.com/wp-content/uploads/2016/07/7-11-Grab-6.jpg'
    }, {
      title: 'สินค้าใหม่',
      image: 'http://chiangmai.siamdot.com/wp-content/uploads/2016/07/7-11-Grab-6.jpg'
    }];

  }

  popupActivities(){
    const profileModal = this.modalCtrl.create(ActivityPage, { userId: 8675309 });
    profileModal.present();
  }

  location(){
    alert("ffffffffffff");
    this.navCtrl.push(ShopLocationPage);
  }

}
