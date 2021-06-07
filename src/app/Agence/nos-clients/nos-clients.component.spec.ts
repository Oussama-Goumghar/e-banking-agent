import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosClientsComponent } from './nos-clients.component';

describe('ContactezNousComponent', () => {
  let component: NosClientsComponent;
  let fixture: ComponentFixture<NosClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
