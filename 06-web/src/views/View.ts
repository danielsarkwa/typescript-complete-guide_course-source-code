import { User } from '../models/User';

export abstract class View {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  abstract eventsMap(): { [key: string]: () => void };
  abstract template(): string;

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  /** fragment in DOM is placeholder for DOM nodes before they are rendered in the browser */
  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    // this addes all the events to all associated elements
    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      // bind event based on the selectors - (id, class, element)
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    // remove all html content in the parent element
    this.parent.innerHTML = '';

    // this creates a place to put our template
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    // add all events to associated view elements
    this.bindEvents(templateElement.content);

    // this adds the template to the parent html element
    this.parent.append(templateElement.content);
  }
}
