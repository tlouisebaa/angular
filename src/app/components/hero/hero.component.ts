import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  public form = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

  submit(event) {
    console.log(event);
    console.log(this.form.controls.name.value);
  }

}
