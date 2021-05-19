import { Model } from '../models/Model';

/* first generic parameter is the type for the view and
  the second parameter is the type for the Model being used for the view */
export abstract class View<T extends Model<K>, K> {
  regions: { [keys: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract template(): string;

  regionsMap(): { [keys: string]: string } {
    return {};
  }

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

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

  MapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    // get the elements using their selectors and assgin it to the regions collection
    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);

      if (element) {
        this.regions[key] = element;
      }
    }
  }

  onRender(): void {}

  render(): void {
    // remove all html content in the parent element
    this.parent.innerHTML = '';

    // this creates a place to put our template
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    // add all events to associated view elements
    this.bindEvents(templateElement.content);

    // get the regions we can nest other html into
    this.MapRegions(templateElement.content);

    // nest all the elements together
    this.onRender();

    // this adds the template to the parent html element
    this.parent.append(templateElement.content);
  }
}
