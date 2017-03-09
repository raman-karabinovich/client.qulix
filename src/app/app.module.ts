import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
/*
 * Platform and Environment providers/directives/pipes
 */
import {ENV_PROVIDERS} from './environment';
import {ROUTES} from './app.routes';
// App is our top level component
import {AppComponent} from './app.component';
import {
  PerformerComponent,
  PerformerAddComponent,
  PerformerEditComponent,
  PerformerDeleteComponent
} from './performers';
import {
  TaskComponent,
  TaskAddComponent,
  TaskEditComponent,
  TaskDeleteComponent

} from './tasks';

import {NoContentComponent} from './no-content';
import {ApploaderComponent} from './components/app-loader';
import {ModalModule, DatepickerModule, PaginationModule} from 'ng2-bootstrap';
import {TextMaskModule} from 'angular2-text-mask';
import {DatePipe} from '@angular/common';
import '../styles/styles.scss';
import '../styles/headings.css';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    PerformerComponent,
    PerformerAddComponent,
    PerformerEditComponent,
    PerformerDeleteComponent,
    TaskComponent,
    TaskAddComponent,
    TaskEditComponent,
    TaskDeleteComponent,
    NoContentComponent,
    ApploaderComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    TextMaskModule,
    RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules}),
    ModalModule.forRoot(),
    DatepickerModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    DatePipe
  ]
})
export class AppModule {

  constructor(public appRef: ApplicationRef) {
  }


}
