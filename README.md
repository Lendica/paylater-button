# Lendica PayLater Button

PayLater button web component.

[![npm version](https://img.shields.io/badge/npm-v1.0.0-8c8ca1)](https://www.npmjs.com/package/@lendica/paylaterbutton)

## Installation

#### Install the PayLater button from npm
```sh
npm i @lendica/paylaterbutton
```

## Usage
Once you have set up a module bundler to resolve ECMAScript `import`, you can start by importing the component in javascript.
```javascript
import '@lendica/paylaterbutton';
```
Then use the component as native HTML tags:

```html
<paylater-button height="32" onclick="clickHandler()"></paylater-button>
```

### Passing the click handler to open PayLater select-terms in app
Lendica iBranch has to be installed for the lendica API to work.
Pass the clickHandler with lendica paylater function to open in-app popup.
```javascript
const clickHandler = () => {
    lendica.ibranch.openPayLater(partner_bill_uuid);
}
```

### Properties
|Name |Type  | Default|
|--- | --- | ---|
|height | number | 32 |
|darkMode | boolean | false |

#### Light mode rendered example
<img src="https://lendica-public.s3.amazonaws.com/assets/paylater_btn_light.png" height=40>

```html
<paylater-button height="36" onclick="clickHandler()"></paylater-button>
```

#### Dark mode rendered example
<img src="https://lendica-public.s3.amazonaws.com/assets/paylater_btn_dark.png" height=40>

```html
<paylater-button height="36" darkMode="true" onclick="clickHandler()"></paylater-button>
```
