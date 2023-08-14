import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/services';

@Component({
  selector: 'app-user-logged-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-logged-info.component.html',
  styleUrls: ['./user-logged-info.component.scss'],
})
export class UserLoggedInfoComponent {
  imageContanier!: HTMLLabelElement;
  selectedImageSrc: string | null = null;
  file: File | null = null;
  ext: string = '';

  constructor(private userService: UserService) {}

  removeImage() {
    this.selectedImageSrc = null;
  }

  handleImage(e: Event) {
    const $target = e.target as HTMLInputElement;

    if (!($target.files && $target.files[0])) return;
    const ext = $target.files[0].name.split('.').pop();

    if (typeof ext === 'undefined') return;
    this.ext = ext;

    this.file = $target.files[0];
    this.selectedImageSrc = URL.createObjectURL(this.file);
  }

  updateImage() {
    if (this.file === null) return;

    this.userService.updateUserImage(this.file, this.ext);
  }
}
