import { TestBed, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { StakaterServiceService } from './stakater-service.service';
import * as Rx from 'rxjs';
import { delay } from "rxjs/operators";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ]
      // ],
      // providers: [StakaterServiceService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'stackater-frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('stackater-frontend');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('stackater-frontend app is running!');
  });

  // it('should fetch greetings', fakeAsync(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   const service = fixture.debugElement.injector.get(StakaterServiceService);
  //   let data = spyOn(service, 'getGreetings').and.callFake(() => {
  //     return Rx.of('Hello').pipe(delay(100));
  //   });
  //   app.getGreetings();
  //   expect(app.greetings).toContain('Hello');
    
  // }));
  
});
