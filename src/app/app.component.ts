import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'shop4less';

  //factorialInput : number = 1;
  //factorialResult!: number;

  constructor(private authService: AuthService) {
    //this.calculateFactorial();
  }

  title = 'Expense Manager';
  isUserLoggedIn = false;

  ngOnInit() {
     let storeData = localStorage.getItem("isUserLoggedIn");
     console.log("StoreData: " + storeData);

     if( storeData != null && storeData == "true")
        this.isUserLoggedIn = true;
     else
        this.isUserLoggedIn = false;
  }

  /*calculateFactorial(){

    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./app.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
        this.factorialResult = data;
      };
      worker.postMessage(this.factorialInput);
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  
  }*/
  
}

/*if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker(new URL('./app.worker', import.meta.url));
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}*/