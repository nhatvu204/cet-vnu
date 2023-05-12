import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImgCarrouselComponent } from './img-carrousel/img-carrousel.component';
import { HeadingComponent } from './heading/heading.component';
import { HeadingMenuComponent } from './heading-menu/heading-menu.component';
import { TestNotificationsComponent } from './test-notifications/test-notifications.component';
import { EventsComponent } from './events/events.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NewsComponent } from './news/news.component';
import { ActivitiesComponent } from './activities/activities.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { FooterComponent } from './footer/footer.component';
import { HoverDirective } from './CustomDirectives/hover.directive';
import { HomeComponent } from './home/home.component';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { KyThiComponent } from './ky-thi/ky-thi.component';
import { HoatDongComponent } from './hoat-dong/hoat-dong.component';
import { LienHeComponent } from './lien-he/lien-he.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { GtGioiThieuComponent } from './gioi-thieu/gt-gioi-thieu/gt-gioi-thieu.component';
import { GtToChucComponent } from './gioi-thieu/gt-to-chuc/gt-to-chuc.component';
import { GtChucNangComponent } from './gioi-thieu/gt-chuc-nang/gt-chuc-nang.component';
import { GtCsvcComponent } from './gioi-thieu/gt-csvc/gt-csvc.component';
import { ChuyenMucComponent } from './chuyen-muc/chuyen-muc.component';
import { DaiHocComponent } from './ky-thi/dai-hoc/dai-hoc.component';
import { ChungComponent } from './ky-thi/chung/chung.component';
import { SauDaiHocComponent } from './ky-thi/sau-dai-hoc/sau-dai-hoc.component';
import { KiemTraComponent } from './hoat-dong/kiem-tra/kiem-tra.component';
import { TapHuanComponent } from './hoat-dong/tap-huan/tap-huan.component';

const appRoute: Routes = [
  {path:'', component: HomeComponent},
  // {path:'', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: GioiThieuComponent,
    children: [
      {path:'', redirectTo:'gioi-thieu', pathMatch:'full'},
      {path:'gioi-thieu',component: GtGioiThieuComponent},
      {path:'co-cau-to-chuc',component: GtToChucComponent},
      {path:'chuc-nang-nhiem-vu',component: GtChucNangComponent},
      {path:'co-so-vat-chat',component: GtCsvcComponent}]},
  {path:'Categories', component: ChuyenMucComponent,
    children:[
      {path:'', redirectTo:'Categories', pathMatch:'full'},
      {path:'tin-tuc', component: TinTucComponent},
      {path:'ky-thi', component: KyThiComponent},
      {path: 'hoat-dong', component: HoatDongComponent},
      {path: 'tuyen-sinh-dai-hoc', component: DaiHocComponent},
      {path: 'hoc-phan-chung', component: ChungComponent},
      {path: 'tuyen-sinh-sau-dai-hoc', component: SauDaiHocComponent},
      {path: 'tap-huan-khao-thi', component: TapHuanComponent},
      {path: 'kiem-tra-kien-thuc', component: KiemTraComponent}
    ]},
  {path: 'Contact', component: LienHeComponent},
  {path:'**', component: ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImgCarrouselComponent,
    HeadingComponent,
    HeadingMenuComponent,
    TestNotificationsComponent,
    EventsComponent,
    NewsComponent,
    ActivitiesComponent,
    FooterNavComponent,
    FooterComponent,
    HoverDirective,
    HomeComponent,
    ErrorComponent,
    GioiThieuComponent,
    ChuyenMucComponent,
    TinTucComponent,
    KyThiComponent,
    HoatDongComponent,
    LienHeComponent,
    DaiHocComponent,
    ChungComponent,
    SauDaiHocComponent,
    KiemTraComponent,
    TapHuanComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
