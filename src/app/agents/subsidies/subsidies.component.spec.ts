import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsidiesComponent } from './subsidies.component';

describe('SubsidiesComponent', () => {
  let component: SubsidiesComponent;
  let fixture: ComponentFixture<SubsidiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsidiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsidiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
