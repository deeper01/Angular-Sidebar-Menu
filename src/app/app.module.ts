import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { PageThreeComponent } from './pages/page-three/page-three.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';

const routes: Routes = [
  {
    path: 'home',
    component:HomePageComponent
  },
  {
     path: '',
      redirectTo: 'HomePage',
       pathMatch: 'full'
  },
  {
    path: 'one',
    component: PageOneComponent
  },
  {
    path: 'two',
    component: PageTwoComponent
  },
  {
    path: 'three',
    component: PageThreeComponent
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    CounterComponent,
    CounterOutputComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
