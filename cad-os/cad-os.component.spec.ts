import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadOsComponent } from './cad-os.component';

describe('CadOsComponent', () => {
  let component: CadOsComponent;
  let fixture: ComponentFixture<CadOsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadOsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
