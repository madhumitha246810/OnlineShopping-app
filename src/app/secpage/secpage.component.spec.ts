import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecpageComponent } from './secpage.component';

describe('SecpageComponent', () => {
  let component: SecpageComponent;
  let fixture: ComponentFixture<SecpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
