import {
    Component, Input, NgModule, NgModuleFactory, Compiler, SimpleChanges, OnInit, OnChanges
} from '@angular/core';
import { Draggable } from '../../model/draggable';
import { CommonModule } from '@angular/common';
import { DashboardModule } from '../../dashboard/dashboard.module';


@Component({
    selector: 'dynamic',
    template: `<ng-container *ngComponentOutlet="dynamicComponent;
                            ngModuleFactory: dynamicModule;"></ng-container>`
})
export class DynamicComponent implements OnInit, OnChanges {

    dynamicComponent: any;
    dynamicModule: NgModuleFactory<any>;

    @Input() model: Draggable;

    constructor(private compiler: Compiler) {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['model'] && !changes['model'].isFirstChange()) {
            this.dynamicComponent = this.createNewComponent(this.model);
            this.dynamicModule = this.compiler.compileModuleSync(this.createComponentModule(this.dynamicComponent));
        }
    }

    ngOnInit() {
        this.dynamicComponent = this.createNewComponent(this.model);
        // tslint:disable-next-line:max-line-length
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
            imports: [
              CommonModule,
              DashboardModule
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
