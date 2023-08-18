import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { BehaviorSubject, fromEvent } from 'rxjs';
import { StateService } from '../../services/state.service';
import { Location } from '@angular/common';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    public full$ = new BehaviorSubject<boolean>(true);
    public activeMenuItem$ = new BehaviorSubject<boolean>(false);
    public currentRoute: string = '';
    public shown = false;

    public menuItems = [
        {
            name: 'home',
            url: '/home',
        },
        {
            name: 'affiliate',
            url: '/affiliate',
        },
        {
            name: 'advertiser',
            url: '/advertiser',
        },
        {
            name: 'blog',
            url: '/blog',
        },
        {
            name: 'careers',
            url: '/careers',
        },
        {
            name: 'about-us',
            url: '/about-us',
        },
        {
            name: 'contacts',
            url: '/contacts',
        },
    ]

    constructor(private router: Router, private location: Location, private translate: TranslateService) {
        fromEvent(window, 'resize').subscribe(() => this.burger());
        this.burger();

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                window.scrollTo(0, 0);
                this.currentRoute = event.url;
            }
        });
    }

    ngOnInit() {
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.replaceLastSegment(event.lang);
        });
    }

    replaceLastSegment(newSegment: string): void {
        const currentUrl = this.location.path();
        const segments = currentUrl.split('/');
        console.log(segments);
        if (segments.length > 2) {
            segments[segments.length - 1] = newSegment;
            const newUrl = segments.join('/');
            this.router.navigateByUrl(newUrl);
        }
    }

    public burger(): void {
        document.documentElement.clientWidth < 1025
            ? this.full$.next(false)
            : this.full$.next(true);
    }

    public toggleShown(): void {
        this.shown = !this.shown;
    }

    public redirectTo(pageName: string): void {
        const checkbox = document.getElementById('navi-toggle');
        if (checkbox != null) checkbox.click();

        const currentUrl = this.location.path().split("/");
        const val = currentUrl.pop();

        if (val == "ru" || val == "en" || val == "ua") {
            this.router.navigate(['/', pageName, val]).then(() => this.getActiveTab(pageName));
        } else {
            this.router.navigate(['/', pageName, this.translate.currentLang]).then(() => this.getActiveTab(pageName));
        }
    }

    public getActiveTab(pageName: string): void {
        '/' + pageName === this.currentRoute
            ? this.activeMenuItem$.next(true)
            : this.activeMenuItem$.next(false);
    }

    public index(index: number) {
        return index;
    }
}
