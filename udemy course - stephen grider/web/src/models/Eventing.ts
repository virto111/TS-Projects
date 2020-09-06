export type Callback = () => void;

export class Eventing {
  events: {[key: string]: Callback[]} = {};
  
  //! Below we define bound methods with Arrow Function in order to preserve [this]
  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }
  
  //! Below we define bound methods with Arrow Function in order to preserve [this]
  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || !handlers.length) {
      return;
    }

    handlers.forEach(callback => callback());
  }
}