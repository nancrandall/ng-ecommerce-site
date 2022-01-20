import { Component } from "@angular/core";

@Component ({
  //provide a name for directive for name within HTML
  selector: 'store-app',
  template: `
  <h1> {{pageTitle}}<h1/>
  <div> App Component Test</div>
  `
})
export class AppComponent {
  pageTitle: string = 'Online Store'

}
