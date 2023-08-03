import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { Location } from '@angular/common';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    constructor(private state: StateService, private location: Location, private translate: TranslateService) {}

    public currentLang: string = "";

    public get isDark(): boolean {
        return this.state.isDark;
    }

    ngOnInit(): void {

        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.currentLang = event.lang;
        });
    }

    scrollToTop() {
        window.scrollTo(0, 0);
    }
}
