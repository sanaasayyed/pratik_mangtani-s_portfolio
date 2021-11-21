import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VoronavPage } from './voronav.page';

describe('VoronavPage', () => {
  let component: VoronavPage;
  let fixture: ComponentFixture<VoronavPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoronavPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VoronavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
