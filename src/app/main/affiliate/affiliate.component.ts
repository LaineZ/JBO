import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangChangeEvent, TranslateModule, TranslateService } from "@ngx-translate/core";
import { Title } from '@angular/platform-browser';

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

    constructor(private titleService: Title, private translate: TranslateService) {}

    ngOnInit(): void {
        this.setPageTitle();

        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.setPageTitle();
        });
    }

    setPageTitle(): void {
        this.translate.get('affiliate').subscribe((heading: string) => {
            this.titleService.setTitle(`${heading} | Financial Network - JBO Marketing`);
        });
    }


    public index(index: number) {
        return index;
    }
}
