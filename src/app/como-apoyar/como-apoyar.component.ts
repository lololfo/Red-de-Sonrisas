import { Component } from '@angular/core';

@Component({
  selector: 'app-como-apoyar',
  templateUrl: './como-apoyar.component.html',
  styleUrls: ['./como-apoyar.component.css']
})
export class ComoApoyarComponent 
{
  ingredient!: string;

  visible: boolean = false;
  visibledos: boolean = false;
  visibletres: boolean = false;

    showDialog() 
    {
        this.visible = true;
    }
    showDialogDos() 
    {
      this.visibledos = true;
    }
    showDialogTres() 
    {
      this.visibletres = true;
    }
}
