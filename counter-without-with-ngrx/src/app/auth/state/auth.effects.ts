import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType} from '@ngrx/effects';
import { exhaustMap, map, catchError, tap, mergeMap } from 'rxjs/operators'
import { autoLogin, autoLogout, loginStart, loginSuccess, signUpStart, signUpSuccess } from './auth.actions';
import { AuthService } from 'src/app/services/auth.service';
import { Store } from '@ngrx/store';
import {Router} from '@angular/router';
import { of } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { setErrorMessage, setLoadingSpinner } from 'src/app/store/shared/shared.actions';
import { User } from 'src/app/models/user.model';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions, 
        private authService: AuthService,
        private store: Store<AppState>,
        private router: Router
    ) {}

    login$ = createEffect(() => {
       return this.actions$.pipe(
          ofType(loginStart),
          exhaustMap((action) => {
            console.log(action);
            return this.authService.login(action.email, action.password).pipe(
                map((data) => {
                    this.store.dispatch(setLoadingSpinner({status: false}))
                    this.store.dispatch(setErrorMessage({message: ''}))
                    const user = this.authService.formatUser(data);
                    this.authService.setUserInLocalStorage(user);
                    return loginSuccess({ user, redirect: true });                
                }),
                catchError((errorRes: any) => {
                    this.store.dispatch(setLoadingSpinner({status: false}))
                    const errorMessage = this.authService.getErrorMessage(errorRes.error.error.message)
                    return of(setErrorMessage({message: errorMessage}))
                })
            );
          })
        )
    });

    signUp$ = createEffect(()=> {
        return this.actions$.pipe(
            ofType(signUpStart),
            exhaustMap((action) => {
                console.log(action);
                return this.authService.signUp(action.email, action.password).pipe(
                    map((data) => {
                        this.store.dispatch(setLoadingSpinner({status: false}))
                        this.store.dispatch(setErrorMessage({message: ''}))
                        const user = this.authService.formatUser(data);
                        this.authService.setUserInLocalStorage(user);
                        return signUpSuccess({ user, redirect: true });                    
                    }),
                    catchError((errorRes: any) => {
                        this.store.dispatch(setLoadingSpinner({status: false}))
                        const errorMessage = this.authService.getErrorMessage(errorRes.error.error.message)
                        return of(setErrorMessage({message: errorMessage}))
                    })
                )
            })
        )
    })

    loginRedicet$ = createEffect(()=> {
        return this.actions$.pipe(ofType(...[loginSuccess, signUpSuccess]), 
            tap((action: any)=> {
                this.store.dispatch(setErrorMessage({message: ''}))
                if (action.redirect) {
                    this.router.navigate(['/'])
                }
            }))
    }, {dispatch: false})

    autoLogin$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(autoLogin),
          mergeMap((action) => {
            const user = this.authService.getUserFromLocalStorage();
            return of(loginSuccess({ user, redirect: false }));
          })
        );
    });

    autoLogout$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(autoLogout),
          map((action) => {
            const user = this.authService.logout();
            this.router.navigate(['auth'])
          })
        );
    }, {dispatch: false});
}


