import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SommenousComponent } from './sommenous.component';

describe('SommenousComponent', () => {
  let component: SommenousComponent;
  let fixture: ComponentFixture<SommenousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SommenousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SommenousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
