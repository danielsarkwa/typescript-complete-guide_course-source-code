// type alias
type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    const eventHandlers = this.events[eventName] || [];
    eventHandlers.push(callback);
    this.events[eventName] = eventHandlers;
  };

  trigger = (eventName: string): void => {
    const eventHandlers = this.events[eventName];

    if (!eventHandlers || eventHandlers.length === 0) {
      return;
    }

    eventHandlers.forEach((callback) => {
      callback();
    });
  };
}
