import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

enum SnackbarClasses {
  success,
  warning,
  danger,
  default
}

@Component({
  selector: 'app-styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.scss']
})
export class StyleguideComponent implements OnInit {
  public email = '';
  public textareaField = '';
  public selectField = 0;

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  public openSnackbar(
    message: string,
    panelClass: keyof typeof SnackbarClasses
  ) {
    this._snackBar.open(message, 'Ok', {
      panelClass,
      duration: 2500
    });
  }
}
