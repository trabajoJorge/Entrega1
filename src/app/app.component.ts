import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Entrega1';
  alumnos = [ "Harry","Ross",
              "Bruce","Cook",
              "Carolyn","Morgan",
              "Albert","Walker",
              "Randy","Reed",
              "Larry","Barnes",
              "Lois","Wilson",
              "Jesse","Campbell",
              "Ernest","Rogers",
              "Theresa","Patterson",
              "Henry","Simmons",
              "Michelle","Perry",
              "Frank","Butler",
              "Shirley"];
  vips = [ "Harry","Ross",
              "Bruce","Cook",
              "Albert","Walker",
              "Randy","Reed",
              "Theresa","Patterson",
              "Henry","Simmons",
              "Frank","Butler",
              "Shirley"];

  isVip(alumno: string){
    if (this.vips.includes(alumno)) return true;
    else return false;
  }
  hayError= true;
}
