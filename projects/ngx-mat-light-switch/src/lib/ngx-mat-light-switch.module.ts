import { NgModule } from '@angular/core';
import { LightSwitch } from './ngx-mat-light-switch.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [LightSwitch],
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
  exports: [LightSwitch],
})
export class LightSwitchModule {}
