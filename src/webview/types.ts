declare global {
  interface Window {
    Mezon: {
      WebView?: IMezonWebView;
    };
  }
}

export enum MezonEventType {
  ThemeChanged = 'theme_changed',
  ViewPortChanged = 'viewport_changed',
  SetCustomStyle = 'set_custom_style',
  ReloadIframe = 'reload_iframe',
  IframeReady = 'iframe_ready',
  IframeWillReloaded = 'iframe_will_reload',
}

export type MezonEvent = MezonEventType;
export type MezonEventHandler<T> = (eventType: MezonEvent, data?: T) => void;
export type EventHandlers<T> = Record<string, MezonEventHandler<T>[]>;
export type InitParams = Record<string, string | null>;

export interface IMezonWebView {
  initParams: InitParams;
  isIframe: boolean;
  onEvent<T>(eventType: MezonEvent, callback: MezonEventHandler<T>): void;
  offEvent<T>(eventType: MezonEvent, callback: MezonEventHandler<T>): void;
  postEvent<T>(eventType: MezonEvent, callback: Function, eventData: T): void;
  receiveEvent<T>(event: MezonEvent | null, data?: T): void;
}
