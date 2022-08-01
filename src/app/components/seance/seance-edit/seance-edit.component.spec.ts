import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceEditComponent } from './seance-edit.component';

describe('SeanceEditComponent', () => {
  let component: SeanceEditComponent;
  let fixture: ComponentFixture<SeanceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeanceEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeanceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
