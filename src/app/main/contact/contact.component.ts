import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, SharedModule, TranslateModule],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    constructor(private titleService: Title, private translate: TranslateService, private meta: Meta, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const lang = params.get('lang');
            if (lang != null) {
                this.translate.use(lang);
                this.translate.currentLang = lang;
            }
        });

        this.setPageTitle();

        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.setPageTitle();
        });
    }

    setPageTitle(): void {
        this.translate.get('contacts').subscribe((heading: string) => {
            this.titleService.setTitle(`${heading} | Financial Network - JBO Marketing`);
        });

        this.translate.get('contacts_page-meta-description').subscribe((newMetaDescription: string) => {
            this.meta.updateTag({ name: 'description', content: newMetaDescription });
        });
    }

}
