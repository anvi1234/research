import { Component, OnInit,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

constructor(public dialogRef: MatDialogRef<PurchaseComponent>, @Inject(MAT_DIALOG_DATA)public data:any){}

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
