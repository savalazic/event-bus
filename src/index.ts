export class EventBus {
  public eventBus: HTMLElement;

  /**
   *  initialize a new EventBus instance
   */
  constructor() {
    this.eventBus = document.createElement('eventBus');
  }

  /**
   * Add an event listener
   */
  public addEventListener(event: string, callback: () => void) {
    this.eventBus.addEventListener(event, callback);
  }

  /**
   * Remove an event listener
   */
  public removeEventListener(event: string, callback: () => void) {
    this.eventBus.removeEventListener(event, callback);
  }

  /**
   * Dispatch an event
   */
  public dispatchEvent(event: string, detail = {}) {
    this.eventBus.dispatchEvent(new CustomEvent(event, { detail }));
  }
}

(window as any).EventBus = new EventBus();
