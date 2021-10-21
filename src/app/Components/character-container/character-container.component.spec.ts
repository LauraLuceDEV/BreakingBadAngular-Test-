import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterContainerComponent } from './character-container.component';

describe('CharacterContainerComponent', () => {
  let component: CharacterContainerComponent;
  let fixture: ComponentFixture<CharacterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
