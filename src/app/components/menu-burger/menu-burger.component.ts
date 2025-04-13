import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-menu-burger',
  imports: [],
  templateUrl: './menu-burger.component.html',
  styleUrl: './menu-burger.component.css',
})
export class menuBurger {
  readonly dialogRef = inject(MatDialogRef<menuBurger>);
  closeDialog() {
    this.dialogRef.close();
  }
}
