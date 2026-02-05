import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@CompositionEvent({
    selector: 'app-header',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {}