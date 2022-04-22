import {trigger, transition, style, query, group, animate} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
    transition(':increment', slideTo('right') ),
    transition(':decrement', slideTo('left') ),
]);

//'home'

//'mediation'
//'coaching'
//'unternehmensberatung'
//'ueber-mich'

//'kontakt'

function slideTo(direction: string) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ [direction]: '100%'}))
      ], optional),
      query(':enter', [
        animate('300ms ease-out', style({ [direction]: '0%'}))
      ])
    ]),
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
//      query(':leave', animateChild()),
//      query(':enter', animateChild()),
  ];
}
