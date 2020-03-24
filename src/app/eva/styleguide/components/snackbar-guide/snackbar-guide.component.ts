import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

enum SnackbarClasses {
  success,
  warning,
  danger,
  default,
}

@Component({
  selector: 'eva-snackbar-guide',
  templateUrl: './snackbar-guide.component.html',
  styleUrls: ['./snackbar-guide.component.scss'],
})
export class SnackbarGuideComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  public openSnackbar(
    message: string,
    panelClass: keyof typeof SnackbarClasses
  ) {
    this._snackBar.open(message, 'Ok', {
      panelClass,
      duration: 2500,
    });
  }
}
