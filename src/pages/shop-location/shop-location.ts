import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
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
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.latLng = {
      lat: 13.9381232,
      lng: 100.71376
    };
  }

  ionViewDidLoad() {
    this.initMap();
  }

  initMap() {
    this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=13.9360042,100.7166461&radius=2500&type=restaurant&keyword=coffee&key=AIzaSyAKkCULXo1SNuBRN4KRzHl9D2DxV8LzZWE', this.options)
      .map(res => res.json())
      .subscribe(res => {
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
          zoom: 12,
          center: this.latLng
        });

        res.results.forEach(element => {
          let marker = new google.maps.Marker({
            draggable: false,
            position: element.geometry.location,
            map: this.map
          });
          marker.addListener('click', function () {
            alert(JSON.stringify(element));
          });
        });
      }, err => {
        console.log(err);
      });
  }


}
