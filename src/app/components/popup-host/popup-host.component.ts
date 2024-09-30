import {Component, Input, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
    @ViewChild('popupView', {read: ViewContainerRef, static: true})
    private readonly popupView: ViewContainerRef | undefined;

    @Input() set template(templateRef: TemplateRef<unknown> | null) {
        templateRef ? this.insertPopupContent(templateRef) : this.deletePopUp();
    }

    displayModal = false;

    insertPopupContent(templateRef: TemplateRef<unknown>): void {
        this.popupView?.clear();
        this.popupView?.createEmbeddedView(templateRef);
        this.displayModal = true;
    }

    deletePopUp() {
        this.displayModal = false;
    }
}
