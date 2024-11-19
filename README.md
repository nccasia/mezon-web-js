

**Mezon Web SDK**
================
Table of Contents
* [Features](#features)
* [Installation](#installation)
* [API](#API)
* [Build instruction](#build-instruction)

# Features

* Handles events from the web view, such as clicks and form submissions
* Allows you to attach custom event handlers to specific events
* Supports reloading the iframe on demand
* Stores initialization parameters in session storage for easy retrieval

# Install
```html
<!DOCTYPE html>
<html>
<title>Mezon Web SDK</title>
<body>
  <!-- ... -->
  <script src="mezon-web-sdk.js"></script>
  <!-- ... -->
</body>
</html>
```
Now you can use the MezonWebView via window object:
```js
window.Mezon.Webview
```

# API
##  `initParams: Record<string, string | null>`
An object containing the initialization parameters for the web view

## `postEvent<T>(eventType: string, eventData: T, callback: Function): void`

```js
window.Mezon.Webview.postEvent('iframe_ready', () => {})
```

* Posts an event from web view to Mezon, along with any associated data which will be sent as a JSON message to the parent window.

* Handles an incoming event from Mezon. See [MezonWebViewEvent](#MezonWebViewEvent) for more information on available events.

* `eventType`: The event will be posted to Mezon with this name.
* `eventData`: The data associated with the event.
* `callback`: An optional callback function that will be executed when the postEvent method completes.

## `receiveEvent<T>(eventType: MezonAppEvent, eventData: T): void`

```js
window.Mezon.Webview.postEvent('theme_changed', () => {})
```

Handles an incoming event from Mezon. See [MezonAppEvent](#MezonAppEvent) for more information on available events.

* `eventType`: The type of event being received.
* `eventData`: The data associated with the event.

## `onEvent<T>(eventType: MezonAppEvent, callback: MezonEventHandler<T>): void`

```js
window.Mezon.Webview.onEvent('theme_changed', () => {})
```

Registers a new handler for a specific event type. If an event of that type is received, it will be called with the associated data.

* `eventType`: The type of event being registered.
* `callback`: The function to call when the event occurs.

## `offEvent<T>(eventType: MezonAppEvent, callback: MezonEventHandler<T>): void`

```js
window.Mezon.Webview.offEvent('theme_changed', handler)
```
Unregisters a previously registered handler for a specific event type.

* `eventType`: The type of event being unregistered.
* `callback`: The function being removed from the handlers list.

## Enums
### MezonAppEvent
Events from Mezon to web view
```ts
export enum MezonAppEvent {
  ThemeChanged = 'theme_changed',
  ViewPortChanged = 'viewport_changed',
  SetCustomStyle = 'set_custom_style',
  ReloadIframe = 'reload_iframe',
}
```
### MezonWebViewEvent
Events from web view to Mezon
```ts
export enum MezonWebViewEvent {
  IframeReady = 'iframe_ready',
  IframeWillReloaded = 'iframe_will_reload',
}
```
# Build instruction
```bash
npm run build
```