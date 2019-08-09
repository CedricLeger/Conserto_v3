import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposeEventComponent } from './propose-event.component';

describe('ProposeEventComponent', () => {
  let component: ProposeEventComponent;
  let fixture: ComponentFixture<ProposeEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposeEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
