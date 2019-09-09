import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BizhelpComponent } from './bizhelp.component';

describe('BizhelpComponent', () => {
  let component: BizhelpComponent;
  let fixture: ComponentFixture<BizhelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BizhelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BizhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
