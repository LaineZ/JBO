import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { PartnersComponent } from '../partners/partners.component';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule, TranslateModule, PartnersComponent],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
    constructor(private titleService: Title, private translate: TranslateService, 
        private meta: Meta, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.setPageTitle();

        this.route.paramMap.subscribe(params => {
            const lang = params.get('lang');
            if (lang != null) {
                this.translate.use(lang);
                this.translate.currentLang = lang;
            }
        });

        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.setPageTitle();
        });
    }

    setPageTitle(): void {
        this.translate.get('about-us').subscribe((heading: string) => {
            this.titleService.setTitle(`${heading} | Financial Network - JBO Marketing`);
        });

        this.translate.get('about_page-meta-description').subscribe((newMetaDescription: string) => {
            this.meta.updateTag({ name: 'description', content: newMetaDescription });
        });
    }

}
