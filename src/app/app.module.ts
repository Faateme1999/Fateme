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
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { CartService } from './cart/cart.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CodeComponent,
    ProductsComponent,
    CartComponent,
    DetailsComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'login',component:LoginComponent},{path:'code',component:CodeComponent},{path:'product',component:ProductsComponent},{path:'product/:id',component:DetailsComponent},{path:'cart',component:CartComponent},{path:'checkout',component:CheckoutComponent}
    ]),
    ToastrModule.forRoot(),
    ToastNoAnimationModule.forRoot(),
  ],
  providers: [LoginService,CodeServiceService,CartService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
