import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-detail-modal',
  templateUrl: './project-details.html',
  styleUrls: ['./project-details.scss'],
  imports: [CommonModule],
})
export class ProjectDetailModal {
  @Input() title!: string;
  @Input() introduction!: string;
  @Input() images!: string[];
  @Input() tasks!: string[];
  @Input() techStack!: string[];
  @Input() github!: string;

  @Output() closeModal = new EventEmitter<void>();

  currentImageIndex = 0;

  close() {
    this.closeModal.emit();
  }

  nextImage() {
    if (this.images?.length) {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.images.length;
    }
  }

  prevImage() {
    if (this.images?.length) {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    }
  }
}
