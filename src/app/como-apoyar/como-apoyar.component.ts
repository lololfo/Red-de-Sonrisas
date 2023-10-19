import { Component } from '@angular/core';

@Component({
  selector: 'app-como-apoyar',
  templateUrl: './como-apoyar.component.html',
  styleUrls: ['./como-apoyar.component.css']
})
export class ComoApoyarComponent 
{
  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
    
    sidebarVisible: boolean = false;
}
