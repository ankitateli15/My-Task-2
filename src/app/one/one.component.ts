import { Component } from '@angular/core';
import { SharedDataServices } from '../shared/services/shared-data.services';
import { SampleDataService } from '../shared/services/sample-data.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent {
  importedProperty: any;
  constructor(private sharedDataServices: SharedDataServices, private sampleDataServ: SampleDataService) {
    this.importedProperty = sharedDataServices.placeholderVar;
    sharedDataServices.changePlaceholderValue('ankita')
    // console.log(sampleDataServ.placeholderVar)
  }
}
