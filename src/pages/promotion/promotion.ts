import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ShopLocationPage } from '../shop-location/shop-location';

/**
 * Generated class for the PromotionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-promotion',
  templateUrl: 'promotion.html',
})
export class PromotionPage {
  list = ['https://daeuwum0jyqvu.cloudfront.net/wp-content/uploads/2017/09/article-7-11-stamp.jpg',
  'https://daeuwum0jyqvu.cloudfront.net/wp-content/uploads/2017/09/article-7-11-stamp.jpg',
  'https://daeuwum0jyqvu.cloudfront.net/wp-content/uploads/2017/09/article-7-11-stamp.jpg',
  'https://daeuwum0jyqvu.cloudfront.net/wp-content/uploads/2017/09/article-7-11-stamp.jpg',
  'https://daeuwum0jyqvu.cloudfront.net/wp-content/uploads/2017/09/article-7-11-stamp.jpg'];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromotionPage');
  }

  gotoProfile(){
    this.navCtrl.push(ProfilePage);
  }
  location(){
    this.navCtrl.push(ShopLocationPage);
  }
}
