import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-my-game',
  template: `<div *ngFor="let datum of data">
              <button>{{datum}}</button>
            </div>`,
})

export class MyGameComponent {
  @Input() data: any;
}
