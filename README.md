# event-bus

Simple Event Bus library for event management.

## Installation

```
npm i @savalazic/event-bus
```

## API

### `addEventListener`

```js
// @event - string
// @callback - function
EventBus.addEventListener(event, callback);
```

### `removeEventListener`

```js
// @event - string
// @callback - function
EventBus.removeEventListener(event, callback);
```

### `dispatchEvent`

```js
// @event - string
// @detail (optional) - object
EventBus.dispatchEvent(event, detail);
```

## Example

[All examples](https://github.com/savalazic/event-bus/tree/master/example)

## Licence

event-bus is released under the MIT license.
Copyright © 2018 Sava Lazic.
