import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-viewer',
  templateUrl: './directive-viewer.component.html',
  styleUrls: ['./directive-viewer.component.scss']
})
export class DirectiveViewerComponent {
  private _isVisible = false;

  get isVisible(): boolean {
    return this._isVisible;
  }

  set isVisible(value: boolean) {
    this._isVisible = value;
  }

  constructor() { }
  
  visibilityChangeHandler() {
    this.isVisible = !this.isVisible;
  }
}
