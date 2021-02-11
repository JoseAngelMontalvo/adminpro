import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/service.index';
import { User } from '../../models/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User;
  imageProfile: File;
  imageTemp: string;

  constructor(public _userService: UsersService) {
    this.user = this._userService.user;
  }

  ngOnInit(): void {}
  saveProfile(userProfile: User) {
    this.user.name = userProfile.name;

    if (!this.user.google) {
      this.user.email = userProfile.email;
    }

    this._userService.saveProfile(this.user).subscribe((resp) => {
      console.log(resp);
    });
  }

  selectImage(file: File) {
    if (!file) {
      this.imageProfile = null;
      return;
    }
    if (file.type.indexOf('image') < 0) {
      Swal.fire({
        title: 'Archivo incorrecto',
        text: 'El archivo seleccionado no es una imagen',
        icon: 'error',
      });
      this.imageProfile = null;
      return;
    }
    this.imageProfile = file;
    const reader = new FileReader();
    const urlImageTemp = reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.imageTemp = reader.result as string;
    };
  }
  upDateImage() {
    this._userService.upDateImageProfileUser(this.imageProfile, this.user._id);
  }
}
