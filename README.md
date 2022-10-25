# ngx-mat-light-switch

Reusable and Customizable Angular Material Component - Switch app's themes (light and dark)

[@kpucha](https://www.github.com/kpucha)

![GitHub](https://img.shields.io/github/license/kpucha/ngx-mat-light-switch?style=for-the-badge)

## Demo

//TODO

## Installation

Install with npm

```bash
  npm install @kpucha/ngx-mat-light-switch
```

## Usage / Examples

Import module from your local distribution

```typescript
import { LightSwitchModule } from 'ngx-mat-light-switch';
//...
  imports: [..., LightSwitchModule]
//...
```

Import css from the module assets in your src/styles.scss

```css
@import "../node_modules/ngx-mat-light-switch/assets/light-switch.scss";
```

Show the component

```html
<ngx-mat-light-switch #lightSwitch></ngx-mat-light-switch>
```

Import component from your local distribution

```typescript
import { LightSwitch } from "ngx-mat-light-switch";
//...
  @ViewChild(LightSwitch)
  lightSwitch!: LightSwitch;

  foo() {
    //GET LIGHT STATUS
    this.lightSwitch.lightStatus()
    //SET LIGHT STATUS
    this.lightSwitch.setLight(true);
    this.lightSwitch.setLight(false);
    //TOGGLE LIGHT STATUS
    this.lightSwitch.toggleLight();
  }
//...
```

## Usage Locally

Clone the project

```bash
  git clone https://github.com/kpucha/ngx-mat-light-switch.git
```

Go to the project directory

```bash
  cd ngx-mat-light-switch
```

Install dependencies

```bash
  npm install
```

Build it

```bash
  npm run build
```

**Copy the content of /dist to your project node_modules folder !!!**

Follow the Usage / Examples section steps..

## Directives

### Properties

| Name                  | Type           | Description                                           | Default value       |
| :-------------------- | :------------- | :---------------------------------------------------- | :------------------ |
| `@Input() lightsOn`   | `Boolean`      | Light status                                          | _true_              |
| `@Input() color`      | `ThemePalette` | Theme palette used -> 'accent' \| 'primary' \| 'warn' | _'accent'_          |
| `@Input() tooltipOn`  | `string`       | Tooltip text when lights are on                       | _'Turn lights off'_ |
| `@Input() tooltipOff` | `string`       | Tooltip text when lights are off                      | _'Turn lights on'_  |
| `@Input() matIconOn`  | `string`       | Icon when lights are on                               | _'dark_mode'_       |
| `@Input() matIconOff` | `string`       | Icon when lights are off                              | _'light_mode'_      |

### Methods

#### Get light status

```typescript
.lightStatus()
```

| Return   | Type      | Description          |
| :------- | :-------- | :------------------- |
| `status` | `boolean` | Current light status |

#### Set light status

```typescript
.setLight(status)
```

| Parameter | Type      | Description                           |
| :-------- | :-------- | :------------------------------------ |
| `status`  | `boolean` | **Required**. Status to set lights to |

#### Toggle light status

```typescript
.toggleLigths()
```
