import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { OneComponent } from "./one/one.component";
import { TwoComponent } from "./two/two.component";
import { ThreeComponent } from "./three/three.component";
import { SharedDataServices } from "./shared/services/shared-data.services";
import { FourComponent } from "./four/four.component";


@NgModule({
    declarations: [AppComponent,
        OneComponent,
        TwoComponent,
        ThreeComponent,
        FourComponent
       
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NoopAnimationsModule,
       
    ],
    providers: [
        SharedDataServices
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}