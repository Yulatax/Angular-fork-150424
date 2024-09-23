import {Component} from '@angular/core';
import {applicationConfigMock} from './shared/application-config.mock';

@Component({
    selector: 'app-root',
    // selector: 'div#root',
    templateUrl: './app.component.html',
    // template: `
    //     <h1>Hello</h1>
    // `,
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    // title = 'Angular-learnjs-150424';

    readonly applicationConfigMock = applicationConfigMock;

    isSidenavOpenedStore = false;

    onMenuClick(_event: Event) {
        // eslint-disable-next-line no-console
        // console.log('Menu Clicked (in AppComponent)', event);
        this.isSidenavOpenedStore = !this.isSidenavOpenedStore;
    }
}
