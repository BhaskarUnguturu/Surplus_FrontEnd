import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-status-tracking',
  templateUrl: './status-tracking.component.html',
  styleUrls: ['./status-tracking.component.css']
})
export class StatusTrackingComponent implements OnInit {

  constructor(
    public matDialogRef: MatDialogRef<StatusTrackingComponent>,
    @Inject(MAT_DIALOG_DATA) public _data: any,
  ) {
    matDialogRef.disableClose = true;
  }

  ngOnInit() {
  }

}
