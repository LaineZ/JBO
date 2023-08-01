import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cookies-doc',
  templateUrl: './cookies-doc.component.html',
  styleUrls: ['./cookies-doc.component.scss']
})
export class CookiesDocComponent implements OnInit {
  
  
  constructor(private titleService: Title,
    private meta: Meta, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.setPageTitle();
  }

  setPageTitle(): void {
    this.titleService.setTitle("Cookie Policy | Financial Network - JBO Marketing");
    this.meta.updateTag({ name: 'description', content: "Stay informed about how we use cookies to improve your financial network experience." });
  }

}
