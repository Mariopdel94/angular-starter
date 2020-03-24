import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eva-forms-guide',
  templateUrl: './forms-guide.component.html',
  styleUrls: ['./forms-guide.component.scss']
})
export class FormsGuideComponent implements OnInit {
  public email = '';
  public textareaField = '';
  public selectField = 0;

  constructor() {}

  ngOnInit(): void {}
}
