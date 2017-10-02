import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { MenubarComponent } from './menubar/menubar';
@NgModule({
	declarations: [ProgressBarComponent,
    MenubarComponent],
	imports: [],
	exports: [ProgressBarComponent,
    MenubarComponent]
})
export class ComponentsModule {}
