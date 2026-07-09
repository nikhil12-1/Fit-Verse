import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinNow } from './join-now';

describe('JoinNow', () => {
  let component: JoinNow;
  let fixture: ComponentFixture<JoinNow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JoinNow],
    }).compileComponents();

    fixture = TestBed.createComponent(JoinNow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
