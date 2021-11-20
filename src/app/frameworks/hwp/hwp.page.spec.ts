import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HwpPage } from './hwp.page';

describe('HwpPage', () => {
  let component: HwpPage;
  let fixture: ComponentFixture<HwpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HwpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HwpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
