import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-terms-of-use-doc',
  templateUrl: './terms-of-use-doc.component.html',
  styleUrls: ['./terms-of-use-doc.component.scss']
})
export class TermsOfUseDocComponent implements OnInit {

  constructor(private titleService: Title,
    private meta: Meta, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setPageTitle();
  }

  setPageTitle(): void {
    this.titleService.setTitle("Terms of use | Financial Network - JBO Marketing");
    this.meta.updateTag({ name: 'description', content: "Stay informed about how we use your information to improve your financial network experience." });
  }

}
