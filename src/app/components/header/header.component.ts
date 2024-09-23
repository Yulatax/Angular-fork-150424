import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ApplicationConfig} from 'src/app/shared/application-config.interface';

@Component({
    selector: 'app-header',
    // standalone: true,
    // imports: [MatToolbarModule, MatIconModule, MatButtonModule],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    // styles: [],
})
export class HeaderComponent {
    // @Input({
    //     alias: 'applicationConfig',
    //     required: true,
    // })
    @Input() applicationConfig: ApplicationConfig | null = null;

    @Output() menuClick = new EventEmitter<Event>();

    readonly title = 'Angular-learnjs-150424';
    readonly imageSrc = '../../../favicon.ico';

    readonly window = window;

    getTitle(): string {
        return this.title;
    }

    onClick(event: Event) {
        // eslint-disable-next-line no-console
        console.log('Clicked!!!', event);
        this.menuClick.emit(event);
    }
}
