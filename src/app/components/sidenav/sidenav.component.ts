/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line prettier/prettier
import {
    Component,
    ContentChild,
    ElementRef,
    Input,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
// import {MatButton} from '@angular/material/button';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
    // @ViewChild('drawer') private readonly drawerComponent: MatDrawer | undefined;
    @ViewChild(MatDrawer) private readonly drawerComponent: MatDrawer | undefined;

    // @ViewChild(MatDrawer, {read: ElementRef})
    // private readonly drawerElement: ElementRef<HTMLElement> | undefined;

    // @ViewChild(MatButton) private readonly buttonComponent: MatButton | undefined;

    // @Input() isSidenavOpened = false;

    // @Output() isSidenavOpenedChange = new EventEmitter<boolean>();

    @ViewChild('viewport', {read: ViewContainerRef, static: true})
    private readonly viewport: ViewContainerRef | undefined;

    @ContentChild('navigationTemplate', {static: true})
    private readonly navigationTemplate: TemplateRef<unknown> | undefined;

    constructor() {
        setTimeout(() => {
            if (this.navigationTemplate) {
                this.viewport?.createEmbeddedView(this.navigationTemplate);
            }
        }, 100);
    }

    // @Input() navigationTemplate: TemplateRef<unknown> | null = null;

    // @Input() set navigationTemplate(templateRef: TemplateRef<unknown>) {
    //     this.insertNavigationTemplate(templateRef);
    // }

    toggleSidenavOpened() {
        this.drawerComponent?.toggle();
        // console.log(this.drawerElement?.nativeElement);

        // console.log(this.buttonComponent);

        // this.isSidenavOpenedChange.emit(!this.isSidenavOpened);
    }

    insertNavigationTemplate(templateRef: TemplateRef<unknown>): void {
        this.viewport?.clear();
        this.viewport?.createEmbeddedView(templateRef);
    }
}
