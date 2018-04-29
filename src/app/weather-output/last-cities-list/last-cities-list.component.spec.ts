import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastCitiesListComponent } from './last-cities-list.component';

describe('LastCitiesListComponent', () => {
  let component: LastCitiesListComponent;
  let fixture: ComponentFixture<LastCitiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastCitiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastCitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
