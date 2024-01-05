import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedViewComponent } from './updated-view.component';

describe('UpdatedViewComponent', () => {
  let component: UpdatedViewComponent;
  let fixture: ComponentFixture<UpdatedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatedViewComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UpdatedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
