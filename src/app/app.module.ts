import { ShopLocationPage } from '../pages/shop-location/shop-location';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PromotionPage } from '../pages/promotion/promotion';
import { CouponPage } from '../pages/coupon/coupon';
import { PaymentPage } from '../pages/payment/payment';
import { OtherPage } from '../pages/other/other';
import { ActivityPage } from '../pages/activity/activity';
import { PaymentPincodePage } from '../pages/payment-pincode/payment-pincode';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PromotionPage,
    CouponPage,
    PaymentPage,
    OtherPage,
    ActivityPage,
    PaymentPincodePage,
    ShopLocationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PromotionPage,
    CouponPage,
    PaymentPage,
    OtherPage,
    ActivityPage,
    PaymentPincodePage,
    ShopLocationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
