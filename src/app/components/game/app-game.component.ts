import { Component, Input } from "@angular/core";

type Data = {
  [key: string]: string;
}

@Component({
  selector: 'app-game',
  template: `<app-my-game [data]="data">Your game component</app-my-game>`,
})

export class GameComponent {
  data: Data = {
    'Poland': 'Warsaw',
    'Germany': 'Berlin',
    'Azerbaijan': 'Baku',
    'Papua New Guinea': 'Port Moresby'
  };
}
