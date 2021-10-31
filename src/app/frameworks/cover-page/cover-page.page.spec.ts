import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoverPagePage } from './cover-page.page';

describe('CoverPagePage', () => {
  let component: CoverPagePage;
  let fixture: ComponentFixture<CoverPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoverPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
