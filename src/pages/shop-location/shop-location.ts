import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var google;
@IonicPage()
@Component({
  selector: 'page-shop-location',
  templateUrl: 'shop-location.html',
})
export class ShopLocationPage {
<<<<<<< HEAD

  map;
  mapElement;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private googleMaps: GoogleMaps,
    private platform:Platform
  ) {

    this.platform.ready().then((readySource)=>{
      this.loadMap();
      console.log('Platform ready form',readySource);
    })

=======
  @ViewChild('map') mapElement: ElementRef;
  private latLng: any = {};
  public map: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.latLng = {
      lat: 13.9381232,
      lng: 100.71376
    };
>>>>>>> f3d8f2867e8bd82914fdcd9f5bdf64bf08bc0a68
  }

  ionViewDidLoad() {
    this.initMap();
  }

<<<<<<< HEAD
  

  loadMap() {
    this.mapElement = document.getElementById('map');

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 14.978751,
          lng: 101.719783
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = this.googleMaps.create(this.mapElement, mapOptions);
    // this.map = new GoogleMap(this.mapElement, mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // Now you can use all methods safely.
        this.map.addMarker({
            title: 'Ionic',
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: 14.978751,
              lng: 101.719783
            }
          })

          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          });

      });
=======
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
>>>>>>> f3d8f2867e8bd82914fdcd9f5bdf64bf08bc0a68
  }


}
