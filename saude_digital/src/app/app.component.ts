import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DigitalSSectionComponent } from './digital-s-section/digital-s-section.component';
import { RodapeComponent } from './rodape/rodape.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, DigitalSSectionComponent, RodapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'saude_digital';
}
