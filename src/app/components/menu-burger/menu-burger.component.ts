import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-burger',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-burger.component.html',
  styleUrl: './menu-burger.component.css',
})
export class menuBurger {
  readonly dialogRef = inject(MatDialogRef<menuBurger>);
  closeDialog() {
    this.dialogRef.close();
  }
}
