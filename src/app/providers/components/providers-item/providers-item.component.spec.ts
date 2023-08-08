import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersItemComponent } from './providers-item.component';

describe('ProvidersItemComponent', () => {
  let component: ProvidersItemComponent;
  let fixture: ComponentFixture<ProvidersItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvidersItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvidersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
