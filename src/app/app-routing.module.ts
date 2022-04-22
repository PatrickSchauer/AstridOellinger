import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CoachingComponent} from "./coaching/coaching.component";
import {ImpressumComponent} from "./impressum/impressum.component";
import {KontaktComponent} from "./kontakt/kontakt.component";
import {MediationComponent} from "./mediation/mediation.component";
import {UeberMichComponent} from "./ueber-mich/ueber-mich.component";
import {UnternehmensberatungComponent} from "./unternehmensberatung/unternehmensberatung.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        component: HomeComponent,
        data: {animation: 0}
      },
      {
        path: 'coaching',
        component: CoachingComponent,
        data: {animation: 2}
      },
      {
        path: 'impressum',
        component: ImpressumComponent,
      },
      {
        path: 'kontakt',
        component: KontaktComponent,
        data: {animation: 5}
      },
      {
        path: 'mediation',
        component: MediationComponent,
        data: {animation: 1}
      },
      {
        path: 'ueber-mich',
        component: UeberMichComponent,
        data: {animation: 4}
      },
      {
        path: 'unternehmensberatung',
        component: UnternehmensberatungComponent,
        data: {animation: 3}
      },
      {
        path: '**',
        component: HomeComponent
      },
    ], {scrollPositionRestoration: 'enabled', useHash: true}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
