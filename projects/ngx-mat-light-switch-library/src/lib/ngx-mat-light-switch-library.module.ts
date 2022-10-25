import { NgModule } from '@angular/core';
import { NgxMatLightSwitchComponent } from './ngx-mat-light-switch-library.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [NgxMatLightSwitchComponent],
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
  exports: [NgxMatLightSwitchComponent],
})
export class NgxMatLightSwitchLibraryModule {}
 