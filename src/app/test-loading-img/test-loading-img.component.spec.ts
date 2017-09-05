import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLoadingImgComponent } from './test-loading-img.component';

describe('TestLoadingImgComponent', () => {
  let component: TestLoadingImgComponent;
  let fixture: ComponentFixture<TestLoadingImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLoadingImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLoadingImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
