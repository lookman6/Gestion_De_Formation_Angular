import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationAddComponent } from './formation-add.component';

describe('FormationAddComponent', () => {
  let component: FormationAddComponent;
  let fixture: ComponentFixture<FormationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
