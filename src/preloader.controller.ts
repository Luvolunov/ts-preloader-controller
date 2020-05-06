import { AbstractPreloader, PreloaderOptionsModel } from "./preloader.model";
import { createPreloader } from "./preloader.element";

export class PreloaderController extends AbstractPreloader{
    private hideClass: string;

    constructor(){
        super();
    }

    init(options: PreloaderOptionsModel){
        if (options.defaultElement) {
            this.preloader = options.defaultElement;
        } else {
            const preloader = createPreloader();
            document.body.appendChild(preloader);
            this.preloader = preloader;
        }

        this.hideClass = options.hideClass;
        if (!options.auto) return;

        window.addEventListener("load", () => {
            setTimeout(() => this.hide(), options.hideDelay ?? 1000);
        })
    }

    show(){
        this.preloader.classList.remove(this.hideClass);
    }

    hide(){
        this.preloader.classList.add(this.hideClass);
    }
}