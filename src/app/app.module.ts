import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodeComponent } from './code/code.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginService } from './login/login-service.service';
import { CodeServiceService } from './code/code-service.service';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { DataserviceComponent } from './dataservice/dataservice.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CodeComponent,
    OrderHistoryComponent,
    ProductsComponent,
    CartComponent,
    DataserviceComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'login',component:LoginComponent},{path:'code',component:CodeComponent},{path:'history',component:OrderHistoryComponent},{path:'product',component:ProductsComponent},{path:'product/:id',component:DetailsComponent},{path:'cart',component:CartComponent}
    ])
  ],
  providers: [LoginService,CodeServiceService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
