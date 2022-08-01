import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupePersonnelEditComponent } from './groupe-personnel-edit.component';

describe('GroupePersonnelEditComponent', () => {
  let component: GroupePersonnelEditComponent;
  let fixture: ComponentFixture<GroupePersonnelEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupePersonnelEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupePersonnelEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
