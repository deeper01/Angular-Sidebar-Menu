import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web';

  selectedMenu:any='Home';
  constructor(private router:Router){

  }

  goTo(paramText:string){
    this.selectedMenu=paramText
    this.router.navigate(this.selectedMenu)
  }

  ngOnInit():void{

  }
}
