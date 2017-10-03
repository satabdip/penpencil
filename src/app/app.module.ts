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
<<<<<<< HEAD
import { LectureScreenPage } from '../pages/lecture-screen/lecture-screen';
import { ChapterScreenPage } from '../pages/chapter-screen/chapter-screen';
=======
import { StorePage } from '../pages/store/store';
import { TestPage } from '../pages/test/test';
import { CoursePage } from '../pages/course/course';
import { SubinnerPage } from '../pages/subinner/subinner';
import { MenubarComponent } from '../components/menubar/menubar';
import { BookmarksPage } from '../pages/bookmarks/bookmarks';
import { QuestionsPage } from '../pages/questions/questions';
import { ConceptsPage } from '../pages/concepts/concepts';


>>>>>>> second submit



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
<<<<<<< HEAD
    LectureScreenPage,
    ChapterScreenPage
=======
    StorePage,
    TestPage,
    CoursePage,
    MenubarComponent,
    SubinnerPage,
    BookmarksPage,
    QuestionsPage,
    ConceptsPage
>>>>>>> second submit
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
  StorePage,
    TestPage,
    CoursePage,
    SubinnerPage,
    BookmarksPage,
    QuestionsPage,
    ConceptsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
