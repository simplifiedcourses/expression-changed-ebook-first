import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'my-app',
  standalone: true,
  styleUrls: ['./app.component.css'],
  imports: [CommonModule],
  template: `
  {{name}}
  `,
})
export class AppComponent implements AfterViewInit {
  public name = 'John';
 
  public ngAfterViewInit(): void {
      this.name = 'Jane';
  }
}
