import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { PartnersComponent } from '../partners/partners.component';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule, TranslateModule, PartnersComponent],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
    constructor(private titleService: Title, private translate: TranslateService) {}

    ngOnInit(): void {
        this.setPageTitle();

        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.setPageTitle();
        });
    }

    setPageTitle(): void {
        this.translate.get('about-us').subscribe((heading: string) => {
            this.titleService.setTitle(`${heading} | Financial Network - JBO Marketing`);
        });
    }

}
