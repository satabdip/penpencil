import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MepagePage } from '../pages/mepage/mepage';
import { SignupPage } from '../pages/signup/signup';
import { SettingsPage } from '../pages/settings/settings';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SendsmsPage } from '../pages/sendsms/sendsms';
import { VerifyOtpPage } from '../pages/verify-otp/verify-otp';
import { SignupdashboardPage } from '../pages/signupdashboard/signupdashboard';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { LectureScreenPage } from '../pages/lecture-screen/lecture-screen';
import { ChapterScreenPage } from '../pages/chapter-screen/chapter-screen';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MepagePage,
    SignupPage,
    SettingsPage,
    TabsPage,
    SendsmsPage,
    ProgressBarComponent,
    VerifyOtpPage,
    SignupdashboardPage,
    LectureScreenPage,
    ChapterScreenPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
    menuType: 'push',
    platforms: {
      ios: {
        menuType: 'overlay',
      }
    }
  })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MepagePage,
    SignupPage,
    SettingsPage,
    TabsPage,
    SendsmsPage,
    VerifyOtpPage,
    SignupdashboardPage,
    LectureScreenPage,
    ChapterScreenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
