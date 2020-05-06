export function createElement<K extends keyof HTMLElementTagNameMap>(tag: K, styles?: Array<string> | string): HTMLElementTagNameMap[K]{
    const element = document.createElement(tag);

    if (Array.isArray(styles)){
        element.classList.add(...styles)
    } else {
        element.classList.add(styles);
    }

    return element;
}