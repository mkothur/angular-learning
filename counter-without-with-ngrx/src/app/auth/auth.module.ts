import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from "@ngrx/store";
import { AuthReducer } from "./state/auth.reducer";
import { AuthEffects } from "./state/auth.effects";
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {
        path: '',
        children: [
          { path: '', redirectTo: 'login', pathMatch: 'full' },
          { path: 'login', component: LoginComponent },
          { path: 'signup', component: SignupComponent },
        ],
    }
]
@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent
    ],
    imports: [
        CommonModule, 
        ReactiveFormsModule,
        //EffectsModule.forFeature([]),
        //StoreModule.forFeature({}), 
        RouterModule.forChild(routes)]
})
export class AuthModule {}