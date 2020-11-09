import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './user-profile.service';
import { User } from '../dashboard/model/user.model';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private userProfileService: UserProfileService,
    private ng2ImgMax: Ng2ImgMaxService,
    private toastr: ToastrService) { }

  selectedFiles: FileList;
  currentFileUpload: File;
  user: User = new User();
  idNumber: number;
  uploadedImage: File;
  public source = 'http://localhost:8080/api/auth/download/';
  public imgSource;
  senhaAntiga: string;
  novaSenha: string;

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.idNumber = Number.parseInt(localStorage.getItem('id'));
    this.imgSource = this.source + this.idNumber
    this.userProfileService.loadUsuario(this.idNumber).subscribe(
      user => {
        this.user = user;
      }
    )
  }

  selectFile(event) {
    let image = event.target.files[0];
    this.ng2ImgMax.resizeImage(image, 150, 150).subscribe(
      result => {
        this.uploadedImage = new File([result], result.name);
      }
    );
  }

  upload() {
    this.idNumber = Number.parseInt(localStorage.getItem('id'));
    this.currentFileUpload = this.uploadedImage;
    this.userProfileService.salvar(this.currentFileUpload, this.idNumber).subscribe(
      () => {
        window.location.reload();
      }
    )
  }

  alterar() {
    this.userProfileService.alterar(this.user).subscribe(
      () => {
        window.location.reload();
      }
    )
  }

  alterarSenha() {
    if(this.senhaAntiga === this.novaSenha) {
      this.user.password = this.novaSenha;
      this.userProfileService.alterarSenha(this.user).subscribe(
        () => {
          window.location.reload();
        }
      )
    }
    else {
      this.toastr.error('Acesso negado!', 'As senhas não conferem');
    }
    
  }


}
