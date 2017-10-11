import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private dataListX: Array<any> = [];

  constructor(public navCtrl: NavController) {
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

}
