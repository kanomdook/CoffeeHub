import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var google;
@IonicPage()
@Component({
  selector: 'page-shop-location',
  templateUrl: 'shop-location.html',
})
export class ShopLocationPage {
  @ViewChild('map') mapElement: ElementRef;
  private latLng: any = {};
  public map: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.latLng = {
      lat: 13.9381232,
      lng: 100.71376
    };
  }

  ionViewDidLoad() {
    this.initMap();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 17,
      center: this.latLng
    });
    let marker = new google.maps.Marker({
      draggable: false,
      position: this.latLng,
      map: this.map
    });
  }


}
