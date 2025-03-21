import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('videoElement') video!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    if (this.video) {
      this.video.nativeElement.play().catch(error => console.log("Autoplay blocked:", error));
    } else {
      console.log("Video element not found!");
    }
  }
}
