import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterUnClinetComponent } from './Ajouter-un-clinet.component';

describe('MaRelationBanqueComponent', () => {
  let component: AjouterUnClinetComponent;
  let fixture: ComponentFixture<AjouterUnClinetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterUnClinetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterUnClinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
