import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousLoveQuoteComponent } from './famous-love-quote.component';

describe('FamousLoveQuoteComponent', () => {
  let component: FamousLoveQuoteComponent;
  let fixture: ComponentFixture<FamousLoveQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamousLoveQuoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamousLoveQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
