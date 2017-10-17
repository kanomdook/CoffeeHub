import { ReviewPage } from '../review/review';
import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { PromotionPage } from '../promotion/promotion';
import { CouponPage } from '../coupon/coupon';
import { PaymentPage } from '../payment/payment';
import { OtherPage } from '../other/other';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PromotionPage;
  tab3Root = CouponPage;
  tab4Root = ReviewPage;
  tab5Root = OtherPage;

  constructor() {

  }
}
