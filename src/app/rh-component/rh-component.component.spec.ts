import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhComponentComponent } from './rh-component.component';

describe('RhComponentComponent', () => {
  let component: RhComponentComponent;
  let fixture: ComponentFixture<RhComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
