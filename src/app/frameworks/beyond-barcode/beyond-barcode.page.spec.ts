import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeyondBarcodePage } from './beyond-barcode.page';

describe('BeyondBarcodePage', () => {
  let component: BeyondBarcodePage;
  let fixture: ComponentFixture<BeyondBarcodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeyondBarcodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeyondBarcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
