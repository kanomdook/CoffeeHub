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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.initMap();
  }

  initMap() {
    this.latLng = {
      lat: 13.9381232,
      lng: 100.71376
    };

    let map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 12,
      center: this.latLng
    });

    let request = {
      location: this.latLng,
      radius: '2500',
      types: ['restaurant'],
      keyword: 'coffee'
    };

    let service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, (results, status) => {
      if (status == 'OK') {
        results.forEach(element => {
          let marker = new google.maps.Marker({
            draggable: false,
            position: element.geometry.location,
            map: map
          });

          google.maps.event.addListener(marker, 'click', () => {
            alert(JSON.stringify(element));
          });
        });
      }
    });
  }


}
