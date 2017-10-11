import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  @ViewChild('myElement') element: ElementRef;
  private dataListX: Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
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

  slideLeft(){
    // this.element.nativeElement.scrollLeft = 10;
    // console.log(this.element.nativeElement.scrollLeft);
    // let ele = this.element.nativeElement.querySelector('ion-scroll');
    // ele.scrollX = -10;
    // console.log(ele.scrollX);
  }

}
