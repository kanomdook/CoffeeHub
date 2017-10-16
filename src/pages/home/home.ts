import { ShopLocationPage } from '../shop-location/shop-location';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ActivityPage } from '../activity/activity';
import { QrcodePage } from '../qrcode/qrcode';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private dataListX: Array<any> = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.dataListX = [{
      image: '../../assets/image/SL4.jpg'
    }, {
      image: '../../assets/image/SL5.jpg'
    }, {
      image: '../../assets/image/SL3.jpg'
    }, {
      image: '../../assets/image/SL.jpg'
    }];

  }

  popupActivities() {
    const profileModal = this.modalCtrl.create(ActivityPage, { userId: 8675309 });
    profileModal.present();
  }
  gotoProfile(){
    this.navCtrl.push(ProfilePage);
  }

  location() {
    this.navCtrl.push(ShopLocationPage);
  }
  gotoQR() {
    this.navCtrl.push(QrcodePage);
  }
}
