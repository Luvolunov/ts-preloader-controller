export abstract class AbstractPreloader implements PreloaderModel{

    // only one instance of page preloader should exist in application

    static exists: boolean = false;
    static instance: AbstractPreloader;

    preloader: HTMLElement;

    constructor(){
        if (AbstractPreloader.exists){
            return AbstractPreloader.instance;
        }

        AbstractPreloader.exists = true;
        AbstractPreloader.instance = this;

        return this;
    }

    abstract init(options: PreloaderOptionsModel): void;
    abstract show(): void;
    abstract hide(): void;
}

export interface PreloaderModel{
    // initialize the preloader
    init(options: PreloaderOptionsModel): void;
    // shows the preloader
    show(): void;
    // hide the preloader
    hide(): void;
    // preloader
    preloader: HTMLElement
}

export interface PreloaderOptionsModel{
    // css class for hidding element. for example: .hide{opacity: 0}
    hideClass: string;
    // default html element implements the preloader
    defaultElement?: HTMLElement;
    // count of ms before hideClass will be added to preloader, default 1000 (1 second)
    hideDelay?: number;
    // automatical handle window load and hide preloader
    auto?: boolean;
}