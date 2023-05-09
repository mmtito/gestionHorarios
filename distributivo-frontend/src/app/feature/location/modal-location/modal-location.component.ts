import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import ResponseErrors from 'src/app/utils/errors';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-modal-location',
  templateUrl: './modal-location.component.html',
  styleUrls: []
})
export class ModalLocationComponent implements OnChanges {

  constructor(private locationService: LocationService,
    private router: Router,
    private snackbar: MatSnackBar) { }

  @Input() currentId = '';
  loading = false;

  public location = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    latitude: new FormControl(0, Validators.minLength(10)),
    longitude: new FormControl(0, Validators.minLength(10)),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    status: new FormControl(true)
  })


  ngOnChanges(changes: SimpleChanges) {
    if (!this.validateId()) this.findById();
  }

  private findById() {

    this.locationService.getLocation(this.currentId).subscribe(
      {
        next: (res) => {
          this.location.setValue(res)
        },
        error: (error) => {
          this.snackbar.open(ResponseErrors.getMessageError(error))

        }
      })
  }

  save(): any {
    if (!this.canSaveOrUpdate()) return;
    this.loading = true;

    return this.locationService.saveLocation(this.location.value).subscribe(
      {
        next: (_) => {
          this.snackbar.open("Se ha guardado la ubicacion correctamente ​✅​");
          this.reload();
        },
        error: (error) => {
          this.snackbar.open(ResponseErrors.getMessageError(error))
          this.loading = false;
        }
      })
  }



  cleanLocation() {
    this.location.reset()

  }

  private reload() {
    this.router.navigateByUrl('/layout', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/layout/location/']);
    });
  }

  private validateId() {

    return (!this.currentId || this.currentId.length == 0);

  }

  private canSaveOrUpdate() {
    return (this.location.valid && !this.loading)
  }

  get id(): any { return this.location.get('id') };
  get name(): any { return this.location.get('name') };
  get latitude(): any { return this.location.get('latitude') };
  get longitude(): any { return this.location.get('longitude') };
  get description(): any { return this.location.get('description') };
  get status(): any { return this.location.get('status') };

  set id(value: any) { this.location.patchValue({ id: value }) };
  set name(value: any) { this.location.patchValue({ name: value }) };
  set latitude(value: any) { this.location.patchValue({ latitude: value }) };
  set longitude(value: any) { this.location.patchValue({ longitude: value }) };
  set description(value: any) { this.location.patchValue({ description: value }) };
  set status(value: any) { this.location.patchValue({ status: value }) };


}
