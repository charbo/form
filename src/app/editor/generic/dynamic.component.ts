import {
    Component, Input, NgModule, NgModuleFactory, Compiler, SimpleChanges
} from '@angular/core';
import { Draggable } from '../../model/draggable';


@Component({
    selector: 'dynamic',
    template: `<ng-container *ngComponentOutlet="dynamicComponent;
                            ngModuleFactory: dynamicModule;"></ng-container>`
})
export class DynamicComponent {

    dynamicComponent: any;
    dynamicModule: NgModuleFactory<any>;

    @Input() model: Draggable;

    constructor(private compiler: Compiler) {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['model'] && !changes['model'].isFirstChange()) {
            console.log('create on change');
            this.dynamicComponent = this.createNewComponent(this.model);
            this.dynamicModule = this.compiler.compileModuleSync(this.createComponentModule(this.dynamicComponent));
        }
    }

    ngOnInit() {
        this.dynamicComponent = this.createNewComponent(this.model);
        this.dynamicModule = this.compiler.compileModuleSync(this.createComponentModule(this.dynamicComponent));
    }

    setModel(model: Draggable) {
      this.model = model;
    }

    protected createComponentModule(componentType: any) {
        @NgModule({
            declarations: [
                componentType
            ],
            entryComponents: [componentType]
        })
        class RuntimeComponentModule {
        }
        // a module for just this Type
        return RuntimeComponentModule;
    }

    protected createNewComponent(model: Draggable) {

        @Component({
            selector: 'dynamic-component',
            template: model.template ? model.template : '<div></div>'
        })
        class MyDynamicComponent {
            draggable: Draggable;

            constructor() {
                this.draggable = model;
            }
        }

        return MyDynamicComponent;
    }

}
