export class UserForm {
  parent: Element;

  template(): string {
    return `
      <div>
        <h1>User form</h1>
        <input />
      </div>
    `;
  }

  render(): void {
    // this creates a place to put our template
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    // this adds the template to the parent html element
    this.parent.append(templateElement.content);
  }
}
