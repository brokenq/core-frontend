// import { Component, DynamicComponentLoader, ElementRef, Injector } from '@angular/core';
//
// export class ComponentProvider {
//     path: string;
//     provide: {(module: any): any};
// }
//
// const PROXY_CLASS_NAME = 'component-wrapper';
// const PROXY_SELECTOR = `.${PROXY_CLASS_NAME}`;
//
// export function componentProxyFactory(provider: ComponentProvider): Type {
//     @Component({
//         selector: 'component-proxy',
//         providers: [provide(ComponentProvider, {useValue: provider})]
//     })
//     @View({
//         template: `<span #content/>`
//     })
//     class VirtualComponent {
//         constructor(
//             el: ElementRef,
//             loader: DynamicComponentLoader,
//             inj: Injector,
//             provider: ComponentProvider) {
//             System.import(provider.path).then(m => {
//                 loader.loadIntoLocation(provider.provide(m), el, 'content')
//             });
//         }
//     }
//     return VirtualComponent;
// }