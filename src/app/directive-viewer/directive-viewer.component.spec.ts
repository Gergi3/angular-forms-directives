import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveViewerComponent } from './directive-viewer.component';

describe('DirectiveViewerComponent', () => {
  let component: DirectiveViewerComponent;
  let fixture: ComponentFixture<DirectiveViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
