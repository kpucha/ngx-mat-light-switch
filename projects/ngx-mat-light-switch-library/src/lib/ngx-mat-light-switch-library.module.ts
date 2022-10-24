import { NgModule } from '@angular/core';
import { NgxMatLightSwitchLibraryComponent } from './ngx-mat-light-switch-library.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [NgxMatLightSwitchLibraryComponent],
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
  exports: [NgxMatLightSwitchLibraryComponent],
})
export class NgxMatLightSwitchLibraryModule {}
