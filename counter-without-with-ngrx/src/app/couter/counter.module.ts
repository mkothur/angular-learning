import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./counter/counter.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterButtonsComponent } from "./counter-buttons/counter-buttons.component";


const routes: Routes = [
    { 
        path: '', 
        component: CounterComponent
    }
]

@NgModule({
   declarations: [
        CounterComponent,
        CounterOutputComponent,
        CounterButtonsComponent,
    ],
   imports: [CommonModule, FormsModule, RouterModule.forChild(routes)]
})
export class CounterModule {}