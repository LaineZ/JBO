import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-advertiser',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './advertiser.component.html',
    styleUrls: ['./advertiser.component.scss']
})
export class AdvertiserComponent implements OnInit {
    public advertiserCards = [
        {
            head: 'advertiser_feature-1_heading',
            text: 'advertiser_feature-1_subheading'
        },
        {
            head: 'advertiser_feature-2_heading',
            text: 'advertiser_feature-2_subheading'
        },
        {
            head: 'advertiser_feature-3_heading',
            text: 'advertiser_feature-3_subheading'
        },
        {
            head: 'advertiser_feature-4_heading',
            text: 'advertiser_feature-4_subheading'
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
        this.translate.get('advertiser').subscribe((heading: string) => {
            this.titleService.setTitle(`${heading} | Financial Network - JBO Marketing`);
        });
    }

    public index(index: number) {
        return index;
    }
}
