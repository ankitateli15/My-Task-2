import { Component, Input, OnInit, SimpleChanges, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrl: './four.component.css'
})
export class FourComponent implements OnInit, OnChanges, OnInit, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy{

@Input('getDataFromParent') getDataFromParent : any;
adf = 'bgcjjh';
constructor(){
  console.log('constructor triggered!')
}
ngOnChanges(changes : SimpleChanges): void{
console.log('ngOnchanges triggered!',changes)
}
ngOnInit(){
console.log('ngOnInit triggered!')
}
ngDoCheck(){
  console.log('ngDoCheck triggered!')
}
ngAfterContentInit(): void{
console.log('ngAfterContentInit triggered!')
}
ngAfterContentChecked(): void{
console.log('ngAfterContentChecked triggered!')
}
ngAfterViewInit():void{
  console.log('ngAfterViewInit triggered!')
}
ngAfterViewChecked():void{
console.log('ngAfterViewChecked triggered!')
}
ngOnDestroy():void{
  console.log('ngOnDestroy triggered!')
}
}
