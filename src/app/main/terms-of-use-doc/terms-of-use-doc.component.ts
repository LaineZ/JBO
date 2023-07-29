import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-terms-of-use-doc',
  templateUrl: './terms-of-use-doc.component.html',
  standalone: true,
  styleUrls: ['./terms-of-use-doc.component.scss']
})
export class TermsOfUseDocComponent implements OnInit {

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
    this.titleService.setTitle("Terms of use | Financial Network - JBO Marketing");
    this.meta.updateTag({ name: 'description', content: "Stay informed about how we use your information to improve your financial network experience." });
  }

}
