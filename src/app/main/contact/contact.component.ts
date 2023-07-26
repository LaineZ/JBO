import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, SharedModule, TranslateModule],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    constructor(private titleService: Title, private translate: TranslateService) {}

    ngOnInit(): void {
        this.setPageTitle();

        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.setPageTitle();
        });
    }

    setPageTitle(): void {
        this.translate.get('contacts').subscribe((heading: string) => {
            this.titleService.setTitle(`${heading} | Financial Network - JBO Marketing`);
        });
    }

}
