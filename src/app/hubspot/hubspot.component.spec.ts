import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubspotComponent } from './hubspot.component';

describe('HubspotComponent', () => {
  let component: HubspotComponent;
  let fixture: ComponentFixture<HubspotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HubspotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HubspotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
