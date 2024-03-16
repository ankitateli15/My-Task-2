import { Component } from '@angular/core';
import { SharedDataServices } from '../shared/services/shared-data.services';



@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent {
  constructor(
    private sharedDataserve : SharedDataServices
  ){
    sharedDataserve.placeholderVar
  }
}