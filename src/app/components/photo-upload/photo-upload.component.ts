import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Dialog } from '../../domains/dialog';

@Component({
  selector: 'photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;

  constructor(
    private afStorage: AngularFireStorage,
    public dialogRef: MatDialogRef<PhotoUploadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Dialog
  ) { }

  ngOnInit() {
  }

  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
