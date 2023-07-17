import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicInfoComponent } from './comic-info.component';

describe('ComicInfoComponent', () => {
  let component: ComicInfoComponent;
  let fixture: ComponentFixture<ComicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
