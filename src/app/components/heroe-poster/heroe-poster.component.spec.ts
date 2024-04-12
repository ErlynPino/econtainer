import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroePosterComponent } from './heroe-poster.component';

describe('HeroePosterComponent', () => {
  let component: HeroePosterComponent;
  let fixture: ComponentFixture<HeroePosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroePosterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroePosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
