import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'eva-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  @Input() public color = 'primary';

  constructor() {}

  ngOnInit(): void {}
}
