import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CounterngrxComponent } from "./counterngrx/counterngrx.component";
import { CounterngrxOutputComponent } from "./counterngrx-output/counterngrx-output.component";
import { CounterngrxButtonsComponent } from "./counterngrx-buttons/counterngrx-buttons.component";
import { CustomCounterngrxInputComponent } from "./custom-counterngrx-input/custom-counterngrx-input.component";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./state/counter.reducer";


const routes: Routes = [
    { 
        path: '', 
        component: CounterngrxComponent
    }
]

@NgModule({
    declarations: [
        CounterngrxComponent,
        CounterngrxOutputComponent,
        CounterngrxButtonsComponent,
        CustomCounterngrxInputComponent,
    ],
    imports: [CommonModule, FormsModule, RouterModule.forChild(routes), StoreModule.forFeature('counter', counterReducer)]
})

export class CounterNgrxModule {}