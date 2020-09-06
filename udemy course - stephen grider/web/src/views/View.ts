import { Model } from '../models/Model';

//! <T extends Model<K>, K> -> see this approach, there is no so much logic in it
//* [View<T extends Model<K>, K>] -> [View<User, UserProps>]
export abstract class View<T extends Model<K>, K> {

  regions: {[key: string]: Element} = {};
  
  abstract template(): string;
  
  constructor(public parent: Element, public model: T) {
    this.model.on('change', this.bindModel);
  }

  //* regionsMap is a Default implementation
  regionsMap(): {[key: string]: string} {
    return {};
  }
  
  //* eventsMap is a Default implementation
  eventsMap(): {[key: string]: () => void} {
    return {};
  }

  onRender(): void {}

  bindModel = (): void => {
    this.render();
  }

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    
    //* Implement nesting
    this.mapRegions(templateElement.content);
    this.onRender();

    this.parent.append(templateElement.content);
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);

      if (element) {
        this.regions[key] = element;
      }
    }
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');
      
      fragment
      .querySelectorAll(selector)
      .forEach(element => element.addEventListener(eventName, eventsMap[eventKey]));
    }
  }
}