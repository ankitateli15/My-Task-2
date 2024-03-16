import { Component } from '@angular/core';
import { ThreeDataService } from '../shared/services/three-data.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrl: './three.component.scss',
  providers : [ThreeDataService]
})
export class ThreeComponent {
constructor( private threeDataServe : ThreeDataService ){
  // console.log(threeDataServe.placeholderVar)
}
}
