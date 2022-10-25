import { DOCUMENT } from '@angular/common';
import {
  Component,
  Inject,
  OnInit,
  Renderer2,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'ngx-mat-light-switch',
  template: `
    <button
      mat-icon-button
      [color]="color"
      (click)="toggleLight()"
      [matTooltip]="lightsOn ? tooltipOn : tooltipOff"
    >
      <mat-icon>
        {{ lightsOn ? matIconOn : matIconOff }}
      </mat-icon>
    </button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxMatLightSwitchComponent implements OnInit {
  @Input() lightsOn: Boolean = true;
  @Input() color: ThemePalette = 'accent';
  @Input() tooltipOn: string = 'Turn lights off';
  @Input() tooltipOff: string = 'Turn lights on';
  @Input() matIconOn: string = 'dark_mode';
  @Input() matIconOff: string = 'light_mode';

  private classOn: string = 'light-on';
  private classOff: string = 'light-off';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.setMaterialClasses2Body();
    this.setLightClass2Body();
  }

  public toggleLight() {
    this.lightsOn = !this.lightsOn;
    this.setLightClass2Body();
  }

  public lightStatus(): Boolean {
    return this.lightsOn;
  }

  public setLight(status: boolean) {
    this.lightsOn = status;
    this.setLightClass2Body();
  }

  setMaterialClasses2Body() {
    this.renderer.addClass(this.document.body, 'mat-app-background');
    this.renderer.addClass(this.document.body, 'mat-typography');
  }

  setLightClass2Body() {
    if (this.lightsOn === false) {
      this.renderer.addClass(this.document.body, this.classOff);
      this.renderer.removeClass(this.document.body, this.classOn);
    } else {
      this.renderer.addClass(this.document.body, this.classOn);
      this.renderer.removeClass(this.document.body, this.classOff);
    }
  }
}
