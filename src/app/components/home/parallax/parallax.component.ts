import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core"

// Declaramos las variables para jQuery
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {

  screenHeight:any;

  constructor() { 
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.screenHeight = (window.innerHeight)*0.75;
          console.log(this.screenHeight);
  }

  ngOnInit() {
    document.getElementById("heightParallax").style.height = this.screenHeight+"px";
    this.efectoParallax();
  }

  efectoParallax() {
    $(window).scroll(function() {
      let barra = $(window).scrollTop();
      let position = barra * 0.078;

      $(".background-paradax").css({
        "background-position": "0 -" + position + "px",
      })
    })
  }

  
}
