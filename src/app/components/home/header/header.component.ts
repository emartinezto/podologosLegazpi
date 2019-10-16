import { Component, OnInit } from '@angular/core';

// Declaramos las variables para jQuery
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { 
  }
  ngOnInit() { 
    this.scrollNav();
  }

  scrollNav() {
    $(window).scroll(function () {
      let pixeles = $(window).scrollTop();
      if (pixeles > 100) {
        //$('nav').removeClass('animacionTop');
          $('nav').addClass('navScroll');
      } else {
        if ($('nav').hasClass('navScroll') == true) {
          $('nav').removeClass('navScroll');
          $('nav').addClass('animacionTop');
        }else{
          $('nav').removeClass('navScroll');
        }
      }
    });


  }

  

  

 

}
