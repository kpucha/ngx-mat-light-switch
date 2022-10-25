
# ngx-mat-light-switch

Reusable and Customizable Angular Material Component - Switch app's themes (light and dark)

[@kpucha](https://www.github.com/kpucha)

![GitHub](https://img.shields.io/github/license/kpucha/ngx-mat-light-switch?style=for-the-badge) 

## Demo

//TODO


## Installation

Install with npm

```bash
  //TODO
```
    
## Usage/Examples

```html
<ngx-mat-light-switch/>
```


## Directives

### Properties

| Name | Type     | Description                       | Default value |
| :-------- | :------- | :-------------------------------- | :---------|
| `@Input() lightsOn`      | `Boolean` | Light status | *true* |
| `@Input() color`      | `ThemePalette` | Theme palette used -> 'accent' \| 'primary' \| 'warn' | *'accent'* |
| `@Input() tooltipOn`      | `string` | Tooltip text when lights are on| *'Turn lights off'* |
| `@Input() tooltipOff`      | `string` | Tooltip text when lights are off| *'Turn lights on'* |
| `@Input() matIconOn`      | `string` | Icon when lights are on| *'dark_mode'* |
| `@Input() matIconOff`      | `string` | Icon when lights are off| *'light_mode'* |



### Methods

#### Get light status
```javascript
.lightStatus()
```

| Return | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `status`      | `boolean` | Current light status|

#### Set light status
```javascript
.setLight(status)
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `status`      | `boolean` | **Required**. Status to set lights to|

#### Toggle light status

```javascript
  .toggleLigths()
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
  npm build
```

Import the component from your local distribution
```javascript
  import {NgxMatLightSwitchComponent} from '<<PATH_OF_NGX_MAT_LIGHT_SWITCH>>/dist/ngx-mat-light-switch-library';
```


