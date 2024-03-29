/**
   * Crée un élément du dom, lui ajoute du texte, le place comme dernier
   * enfant de parent et ajoute un attribut en utilisant le paramètre attributes
   * @param {String} markup_name
   * @param {String} text
   * @param {domElement} parent
   * @param {Object[]} attributes  (doit comprendre les propriétés name et value)
   * @returns domElement
   */
export function createMarkup(
  markupname: string,
  text: string,
  parent: HTMLElement,
  attributes: Record<string, any>[] = []
): HTMLElement | HTMLInputElement {
  const markup = document.createElement(markupname);
  markup.textContent = text;
  parent.appendChild(markup);
  for (const attribute of attributes) {
    for (let key in attribute) {
      markup.setAttribute(key, attribute[key]);
    }
  }
  return markup;
}