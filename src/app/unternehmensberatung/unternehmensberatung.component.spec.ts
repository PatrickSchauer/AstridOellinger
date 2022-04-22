import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnternehmensberatungComponent } from './unternehmensberatung.component';

describe('UnternehmensberatungComponent', () => {
  let component: UnternehmensberatungComponent;
  let fixture: ComponentFixture<UnternehmensberatungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnternehmensberatungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnternehmensberatungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
