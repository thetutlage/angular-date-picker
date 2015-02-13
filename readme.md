
## Angular Datepicker

**jQuery less** datepicker for angularjs.

Angular datepicker is a light weight datepicker under `1K` with only dependencies to [PikaDay](https://github.com/dbushell/Pikaday) and [momentJs](http://momentjs.com/)

### Dependencies

1. [MomentJs](http://momentjs.com/) 11.6K minified and gzip
2. [PikaDay](https://github.com/dbushell/Pikaday) 5K minified and gzip

### Install 

`bower install angular-pikaday-picker`

### Setting up

Make sure you have include `moment js` and `pikaday` both on your page before you include angular date picker.

```html
<script type="text/javascript" src="bower_components/moment/min/moment.min.js"></script>
<script type="text/javascript" src="bower_components/pikaday/pikaday.js"></script>	

<script type="text/javascript" src="bower_components/angular-date-picker/angular-date-picker.min.js"></script>	
```

### Your module

```javascript
var app = angular.module('yourApp',['angular.datepicker']);
```

### Your html

```html
<input type="text" ng-model="from_date" picka-day />
```

That's all you need for minimal setup.

### Options

**Format**
```html
<input type="text" ng-model="from_date" picka-day format="MM-D-YYYY" />
```

**Deafult Date**
```html
<input type="text" ng-model="from_date" picka-day default-date="2015-02-11" />
```


**Disable Weekends**
```html
<input type="text" ng-model="from_date" picka-day disable-weekends=true />
```

**Min Date**
```html
<input type="text" ng-model="from_date" picka-day min-date="2015-02-10" />
```

**Max Date**
```html
<input type="text" ng-model="from_date" picka-day max-date="2015-02-20" />
```

### Events

You have also add hooks on different events

**on Select**
```html
<input type="text" ng-model="from_date" picka-day on-select="someMethod" />
```

**on Close**
```html
<input type="text" ng-model="from_date" picka-day on-close="someMethod" />
```

**on Open**
```html
<input type="text" ng-model="from_date" picka-day on-open="someMethod" />
```

**on Draw**
```html
<input type="text" ng-model="from_date" picka-day on-draw="someMethod" />
```
