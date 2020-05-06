import { createElement } from "./createElement";
import { PreloaderStyling } from "./preloader.styling";

export function createPreloader(): HTMLDivElement{
    const preloader = createElement("div", PreloaderStyling.preloader) as HTMLDivElement,
          contentOuter = createElement("div", PreloaderStyling.contentOuter) as HTMLDivElement,
          spinnerOuter = createElement("div", PreloaderStyling.spinnerOuter) as HTMLDivElement,
          spinner = createElement("div", PreloaderStyling.spinner) as HTMLDivElement,
          text = createElement("div", PreloaderStyling.text);

    text.textContent = "Загрузка...";

    spinnerOuter.appendChild(spinner);
    contentOuter.appendChild(spinnerOuter);
    contentOuter.appendChild(text);

    preloader.appendChild(contentOuter);

    return preloader;

}