import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.scss']
})
export class StyleguideComponent implements OnInit {
  public email = '';
  public textareaField = '';
  public selectField = 0;

  constructor() {}

  ngOnInit(): void {}
}
