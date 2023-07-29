import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-privacy-doc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-doc.component.html',
  styleUrls: ['./privacy-doc.component.scss']
})
export class PrivacyDocComponent implements OnInit {

  constructor(private titleService: Title, private translate: TranslateService,
    private meta: Meta, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setPageTitle();
    this.route.paramMap.subscribe(params => {
      const lang = params.get('lang');
      if (lang != null) {
        this.translate.use(lang);
        this.translate.currentLang = lang;
      }
    });
  }

  setPageTitle(): void {
    this.titleService.setTitle("Privacy Policy | Financial Network - JBO Marketing");
    this.meta.updateTag({ name: 'description', content: "Stay informed about how we use your information to improve your financial network experience." });
  }

}
