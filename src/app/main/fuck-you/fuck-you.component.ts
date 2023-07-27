import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangChangeEvent, TranslateModule, TranslateService } from "@ngx-translate/core";
import { SharedModule } from "../../shared/shared.module";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-fuck-you',
  standalone: true,
    imports: [CommonModule, SharedModule, TranslateModule],
  templateUrl: './fuck-you.component.html',
  styleUrls: ['./fuck-you.component.scss']
})
export class FuckYouComponent implements OnInit {

  constructor(private translate: TranslateService, private meta: Meta, private titleService: Title) {}

  ngOnInit(): void {
    this.setPageTitle();
    
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.setPageTitle();
  });
  }

  setPageTitle(): void {
    this.translate.get('faq').subscribe((heading: string) => {
      this.titleService.setTitle(`${heading} | Financial Network - JBO Marketing`);
  });

    this.translate.get('faq_page-meta-description').subscribe((newMetaDescription: string) => {
        this.meta.updateTag({ name: 'description', content: newMetaDescription });
    });
}

}
