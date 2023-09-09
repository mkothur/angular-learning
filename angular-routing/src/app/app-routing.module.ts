import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { FormComponent } from './form/form.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'form', component: FormComponent },
  { path: 'users', component: UsersComponent },
  // {path: 'form/:id', component: FormComponent},
  { path: 'template-driven', component: TemplateDrivenComponent },
  { path: 'model-driven', component: ReactiveComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
