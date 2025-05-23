import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMessageDialogComponent } from './create-message-dialog.component';

describe('CreateMessageDialogComponent', () => {
  let component: CreateMessageDialogComponent;
  let fixture: ComponentFixture<CreateMessageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMessageDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMessageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
