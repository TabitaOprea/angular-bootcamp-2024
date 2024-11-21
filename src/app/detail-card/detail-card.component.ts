import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrl: './detail-card.component.css'
})

export class DetailCardComponent {
  @Input() dog: any;
  @Output() like = new EventEmitter<string>();

  onLike() {
      this.like.emit(this.dog.name); // Transmite numele rasei la părinte
    }
}
