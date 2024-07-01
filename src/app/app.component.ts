import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SVGMapSubComponent } from './svg-map-sub/svg-map-sub.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SVGMapSubComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'SVG-Map';
}
