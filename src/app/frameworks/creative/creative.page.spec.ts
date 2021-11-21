import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreativePage } from './creative.page';

describe('CreativePage', () => {
  let component: CreativePage;
  let fixture: ComponentFixture<CreativePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreativePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreativePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
