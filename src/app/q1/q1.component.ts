import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProfilePictureComponent} from '../profile-picture/profile-picture.component';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.scss']
})
export class Q1Component implements OnInit {

  profilePhotoSrc;
  selectedFile: File = null;

  constructor(private ngbModal: NgbModal) {
  }

  ngOnInit() {
    this.profilePhotoSrc = '../../assets/images/me-official.jpg';
  }

  onOpenProfilePictureClick() {
    let ngbModalRef = this.ngbModal.open(ProfilePictureComponent, {'backdrop': false, 'keyboard': false});
    let componentInstance = ngbModalRef.componentInstance;
    componentInstance.imageSrc = this.profilePhotoSrc;
    componentInstance.ngbModalRef = ngbModalRef;
  }


  onUploadProfilePictureClick(event) {
    this.selectedFile = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.profilePhotoSrc = event.target.result;
    }
    reader.readAsDataURL(this.selectedFile);
  }


}
