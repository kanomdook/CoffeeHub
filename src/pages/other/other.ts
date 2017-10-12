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
  pet = "dinks";
  
  product = 
    {
      "dinks": [
          {
              "name": "เมลโล่มอคค่า (Mellow Mocha)",
              "image": "https://img.kapook.com/u/2016/surauch/cook1/coffee1_1.jpg"
          },
          {
              "name": "อัฟโฟกาโต (Affogato)",
              "image": "https://img.kapook.com/u/2016/surauch/cOOK/coffee2.jpg"
          },
          {
              "name": "กาแฟนมฟองละมุน",
              "image": "https://img.kapook.com/u/2016/surauch/cOOK/coffee7.jpg"
          },
          {
              "name": "กาแฟเย็นกลิ่นซินนามอน",
              "image": "https://img.kapook.com/u/2016/surauch/cOOK/coffee10.jpg"
          },
          {
              "name": "กาแฟเย็นเวียดนาม",
              "image": "https://img.kapook.com/u/2016/surauch/cOOK/coffee11.jpg"
          }
      ],
      "desserts": [
          {
              "name": "คุกกี้",
              "image": "http://www.coffeefavour.com/wp-content/uploads/2016/05/2-cookie-Custom.jpg"
          },
          {
              "name": "วาฟเฟิล",
              "image": "http://www.coffeefavour.com/wp-content/uploads/2016/05/3-kipacard.kz-waffle-Custom.jpg"
          },
          {
              "name": "มัฟฟิน",
              "image": "http://www.coffeefavour.com/wp-content/uploads/2016/05/4-siera-mafini-44745940-Custom.jpg"
          },
          {
              "name": "แซนวิช",
              "image": "http://www.coffeefavour.com/wp-content/uploads/2016/05/5-sandwich-Custom.jpg"
          },
          {
              "name": "เค้ก",
              "image": "http://www.coffeefavour.com/wp-content/uploads/2016/05/6-come_and_have_coffee_cake-Custom.jpg"
          }
      ],
      "foods": [
          {
              "name": "ซี่โครงหมูบาร์บีคิว",
              "image": "https://www.1112.com/images/products/maindish/website/itm114002.png"
          },
          {
              "name": "ปีกไก่ บาร์บีคิว 10 ชิ้น",
              "image": "https://www.1112.com/images/products/maindish/website/itm116539.png"
          },
          {
              "name": "ชิกเก้นสติ๊กส์",
              "image": "https://www.1112.com/images/products/maindish/website/itm116520.png"
          },
          {
              "name": "ปีกไก่ทอด สไตล์เกาหลี",
              "image": "https://www.1112.com/images/products/maindish/website/itm116561.png"
          },
          {
              "name": "ชิกเก้น นักเก็ตส์ พร้อมน้ำจิ้มไก่",
              "image": "https://www.1112.com/images/products/appetizer/website/itm116570.png"
          }
      ]
  }
  
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
