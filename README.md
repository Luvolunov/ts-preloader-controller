# Simple preloader controller

Built by typescript, has default preloader and styles. It helps you fast add preloader on page using less time.

## Getting started

Simple preloader controller, simple intro

### Installing

Enter in console this

```
npm i @luvolunov/ts-preloader-controller 
```

### Adding to project

Just import controller from package. If you don't have preloader, then package does it for you

```
import "@luvolunov/ts-preloader-controller/styles/index.scss"; // if you don't have preloader
import { PreloaderController } from "@luvolunov/ts-preloader-controller"; 

const preloader = new PreloaderController();

preloader.init({ // initialize
    hideClass: "hidden", // your css class for hidding the preloader, required
    auto: true, // automatically handle the window load and hide preloader, default false
    hideDelay: 600, // waiting hideDelay ms before preloader will be hidden, default 1000 ms
    defaultElement: document.getElementById('element') // element as preloader, default controller create it for you
})
```

### Not-auto

So if you want to use preloader controller in SPA, etc, then don't fill 'auto' property in init method options and use toggle-methods:

```
preloader.init({...})

preloader.show();

preloader.hide();
```

### About idea

The application has only one instance of preloader controller. It uses for loading page, on another cases more user expirience use skeletons instead ordinary spinner, etc.
