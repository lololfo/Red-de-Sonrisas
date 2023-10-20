import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  ingredient!: string;
  
  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

    visible2: boolean = false;

    showDialog2() {
        this.visible2 = true;
    }

    visible3: boolean = false;

    showDialog3() {
        this.visible3 = true;
    }
}
