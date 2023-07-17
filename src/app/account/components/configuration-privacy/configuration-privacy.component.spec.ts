import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationPrivacyComponent } from './configuration-privacy.component';

describe('ConfigurationPrivacyComponent', () => {
  let component: ConfigurationPrivacyComponent;
  let fixture: ComponentFixture<ConfigurationPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurationPrivacyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurationPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
