import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComicComponent } from './comic-card.component';

describe('CardComicComponent', () => {
  let component: CardComicComponent;
  let fixture: ComponentFixture<CardComicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
