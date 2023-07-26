import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';
import { SwiperComponent, SwiperModule } from 'swiper/angular';
import {
    IArticle,
    IEvent,
    IReview,
    IStats,
} from '../../shared/constants/firebase.interface';
import { FirestoreService } from '../../shared/services/firestore.service';
import { SharedModule } from '../../shared/shared.module';
import { PartnersComponent } from '../partners/partners.component';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [
        CommonModule,
        SharedModule,
        TranslateModule,
        SwiperModule,
        RouterLink,
        PartnersComponent,
    ],
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    public eventsList: IEvent[] = [];
    public reviewList: IReview[] = [];
    public statisticsList: IStats[] = [];
    public articlesList: IArticle[] = [];

    @ViewChild('reviews', { static: false }) reviews?: SwiperComponent;
    @ViewChild('statistics', { static: false }) statistics?: SwiperComponent;
    @ViewChild('swiperEvents', { static: false }) events?: SwiperComponent;

    public isDark?: boolean;
    public currentLang: string = 'en';

    public eventsBreakpoints = {
        730: {
            slidesPerView: 1.5,
        },
        1000: {
            centeredSlides: true,
            slidesPerView: 2.4,
            spaceBetween: 32,
        },
        1700: { slidesPerView: 2.5 },
    };

    public statsBreakpoints = {
        500: { slidesPerView: 1 },
        900: { slidesPerView: 2 },
        1800: { slidesPerView: 3 },
    };

    constructor(private firestore: FirestoreService, private titleService: Title, 
        private translate: TranslateService) { }

    async ngOnInit(): Promise<void> {
        this.eventsList = await firstValueFrom(this.firestore.getEvents());
        this.reviewList = await firstValueFrom(this.firestore.getReviews());
        this.statisticsList = await firstValueFrom(this.firestore.getStats());
        this.articlesList = await firstValueFrom(this.firestore.getBlogArticles());
        this.setPageTitle();

        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.setPageTitle();
        });
    }

    setPageTitle(): void {
        this.translate.get('home_page-title').subscribe((heading: string) => {
            this.titleService.setTitle(`${heading} | Financial Network - JBO Marketing`);
        });
    }


    public slideNext(identifier: string): void {
        switch (identifier) {
            case 'reviews':
                this.reviews?.swiperRef.slideNext();
                break;
            case 'statistics':
                this.statistics?.swiperRef.slideNext();
                break;
            case 'events':
                this.events?.swiperRef.slideNext();
                break;
            default:
                break;
        }
    }

    public slidePrev(identifier: string): void {
        switch (identifier) {
            case 'reviews':
                this.reviews?.swiperRef.slidePrev();
                break;
            case 'statistics':
                this.statistics?.swiperRef.slidePrev();
                break;
            case 'events':
                this.events?.swiperRef.slidePrev();
                break;
            default:
                break;
        }
    }

    public index(index: number) {
        return index;
    }
}
