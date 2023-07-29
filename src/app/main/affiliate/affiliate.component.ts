import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangChangeEvent, TranslateModule, TranslateService } from "@ngx-translate/core";
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-affiliate',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './affiliate.component.html',
    styleUrls: ['./affiliate.component.scss']
})
export class AffiliateComponent implements OnInit {
    public affiliateCards = [
        {
            head: 'affiliate_feature-1_heading',
            text: 'affiliate_feature-1_subheading'
        },
        {
            head: 'affiliate_feature-2_heading',
            text: 'affiliate_feature-2_subheading'
        },
        {
            head: 'affiliate_feature-3_heading',
            text: 'affiliate_feature-3_subheading'
        },
        {
            head: 'affiliate_feature-4_heading',
            text: 'affiliate_feature-4_subheading'
        }
    ]

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
        this.translate.get('affiliate').subscribe((heading: string) => {
            this.titleService.setTitle(`${heading} | Financial Network - JBO Marketing`);
        });

        this.translate.get('affiliate_page-meta-description').subscribe((newMetaDescription: string) => {
            this.meta.updateTag({ name: 'description', content: newMetaDescription });
        });
    }


    public index(index: number) {
        return index;
    }
}
