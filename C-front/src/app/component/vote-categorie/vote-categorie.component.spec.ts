import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteCategorieComponent } from './vote-categorie.component';

describe('VoteCategorieComponent', () => {
  let component: VoteCategorieComponent;
  let fixture: ComponentFixture<VoteCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
