import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangChangeEvent, TranslateModule, TranslateService } from "@ngx-translate/core";
import { SharedModule } from "../../shared/shared.module";
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-careers',
    standalone: true,
    imports: [CommonModule, SharedModule, TranslateModule],
    templateUrl: './careers.component.html',
    styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {
    public formHeading: string = 'careers_heading';
    public formSubHeading: string = 'careers_subheading';
    public fileBtnName: string = 'careers_file-btn';

    constructor(private titleService: Title, private translate: TranslateService, private meta: Meta) {}

    ngOnInit(): void {
        this.setPageTitle();

        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.setPageTitle();
        });
    }

    setPageTitle(): void {
        this.translate.get('careers').subscribe((heading: string) => {
            this.titleService.setTitle(`${heading} | Financial Network - JBO Marketing`);
        });

        this.translate.get('careers_page-meta-description').subscribe((newMetaDescription: string) => {
            this.meta.updateTag({ name: 'description', content: newMetaDescription });
        });
    }

}
