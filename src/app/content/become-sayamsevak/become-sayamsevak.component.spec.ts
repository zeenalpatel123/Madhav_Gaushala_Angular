import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeSayamsevakComponent } from './become-sayamsevak.component';

describe('BecomeSayamsevakComponent', () => {
  let component: BecomeSayamsevakComponent;
  let fixture: ComponentFixture<BecomeSayamsevakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BecomeSayamsevakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BecomeSayamsevakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
