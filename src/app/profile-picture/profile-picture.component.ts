import { Component, OnInit } from '@angular/core';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent implements OnInit {

  imageSrc;
  ngbModalRef: NgbModalRef;

  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.ngbModalRef.close();
  }

}
