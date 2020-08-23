import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamplesPage } from './examples.page';

describe('ExamplesPage', () => {
  let component: ExamplesPage;
  let fixture: ComponentFixture<ExamplesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamplesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamplesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
