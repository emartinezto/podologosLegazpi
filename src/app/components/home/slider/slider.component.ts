import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core"


// Declaramos las variables para jQuery
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

    screenHeight:any;

  constructor() { 
    this.getScreenSize();
  }
  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.screenHeight = window.innerHeight;
          console.log(this.screenHeight);
    }

  ngOnInit() {
    document.getElementById("height").style.height = this.screenHeight+"px";

    this.animacionesSlider();
    this.efectoParallax();
  }

  animacionesSlider(){
    $("h2").addClass("animacionH2");
    $("h3").delay(500).queue(function() {
      $(this).addClass("animacionH2");
      $("a").delay(500).queue(function() {
      $(this).addClass("animacionH2");
      })
    })
  }

  efectoParallax() {
    $(window).scroll(function() {
      let barra = $(window).scrollTop();
      let position = (barra * 0.5) + 50;
    

      $(".background").css({
        "background-position": "0 -" + position + "px",
      })
    })
  }



}
