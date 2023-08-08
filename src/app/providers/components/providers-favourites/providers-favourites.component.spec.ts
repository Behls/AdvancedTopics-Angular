import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersFavouritesComponent } from './providers-favourites.component';

describe('ProvidersFavouritesComponent', () => {
  let component: ProvidersFavouritesComponent;
  let fixture: ComponentFixture<ProvidersFavouritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvidersFavouritesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvidersFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
