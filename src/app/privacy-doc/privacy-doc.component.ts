import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-privacy-doc',
  templateUrl: './privacy-doc.component.html',
  styleUrls: ['./privacy-doc.component.scss']
})
export class PrivacyDocComponent implements OnInit {

  constructor(private titleService: Title,
    private meta: Meta, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setPageTitle();
  }

  setPageTitle(): void {
    this.titleService.setTitle("Privacy Policy | Financial Network - JBO Marketing");
    this.meta.updateTag({ name: 'description', content: "Stay informed about how we use your information to improve your financial network experience." });
  }

}
