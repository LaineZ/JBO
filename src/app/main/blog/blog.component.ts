import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { IArticle } from '../../shared/constants/firebase.interface';
import { FirestoreService } from '../../shared/services/firestore.service';
import { SharedModule } from '../../shared/shared.module';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-blog',
    standalone: true,
    imports: [CommonModule, SharedModule, TranslateModule],
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
    public articlesList?: IArticle[];
    public canLoadMore = new BehaviorSubject<boolean>(true);

    constructor(private firestore: FirestoreService, private titleService: Title, private translate: TranslateService, 
        private meta: Meta, private route: ActivatedRoute) {}

    async ngOnInit(): Promise<void> {
        this.route.paramMap.subscribe(params => {
            const lang = params.get('lang');
            if (lang != null) {
                this.translate.use(lang);
                this.translate.currentLang = lang;
            }
        });


        this.articlesList = await firstValueFrom(
            this.firestore.getBlogArticles(9)
        );

        this.setPageTitle();

        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.setPageTitle();
        });
    }

    setPageTitle(): void {
        this.translate.get('blog').subscribe((heading: string) => {
            this.titleService.setTitle(`${heading} | Financial Network - JBO Marketing`);
        });

        this.translate.get('blog_page-meta-description').subscribe((newMetaDescription: string) => {
            this.meta.updateTag({ name: 'description', content: newMetaDescription });
        });
    }


    public async loadMoreArticles(): Promise<void> {
        const coef = this.articlesList!.length / 9 + 1;
        this.articlesList = await firstValueFrom(
            this.firestore.getBlogArticles(9 * coef)
        );
        await firstValueFrom(this.firestore.getBlogArticlesLength()).then(
            (length) =>
                this.canLoadMore.next(this.articlesList!.length !== length)
        );
    }
}
