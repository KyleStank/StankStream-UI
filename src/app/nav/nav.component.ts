import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import videojs, { VideoJsPlayerOptions } from 'video.js';

@Component({
  selector: 'app-main',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, AfterViewInit {
  @ViewChild('video') videoElement: ElementRef;

  ngOnInit(): void {
    console.log('Initialize...');
  }

  ngAfterViewInit(): void {
    const options: VideoJsPlayerOptions = {};
    var player = videojs(this.videoElement.nativeElement, options);
    console.log(player);
  }
}
