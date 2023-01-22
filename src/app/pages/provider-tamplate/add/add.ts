import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'dialog-add',
  templateUrl: './add.html',
  styleUrls: ['./add.scss'],
  //encapsulation: ViewEncapsulation.None
})
export class AddProviderComponent implements OnDestroy, OnInit {

  formControl = new FormControl('', [
    Validators.required,
  ]);

  public show:boolean = true;

  constructor(
    public dialogRef: MatDialogRef<AddProviderComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public provider: any
  ) {
    
  }

  public ngOnInit(): void {
    console.log(this.provider);
    
  }

  public ngOnDestroy(): void {}

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Campo requerido' : '';
  }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.dialogRef.close(this.provider);
  }
}
