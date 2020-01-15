import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughttableComponent } from './thoughttable.component';

describe('ThoughttableComponent', () => {
  let component: ThoughttableComponent;
  let fixture: ComponentFixture<ThoughttableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThoughttableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoughttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
