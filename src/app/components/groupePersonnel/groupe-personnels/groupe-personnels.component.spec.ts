import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupePersonnelsComponent } from './groupe-personnels.component';

describe('GroupePersonnelsComponent', () => {
  let component: GroupePersonnelsComponent;
  let fixture: ComponentFixture<GroupePersonnelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupePersonnelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupePersonnelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
