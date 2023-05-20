import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";
import { firstValueFrom } from "rxjs";
import { IArticle } from "../../shared/constants/firebase.interface";
import { FirestoreService } from "../../shared/services/firestore.service";
import { SharedModule } from "../../shared/shared.module";

@Component({
    selector: 'app-blog',
    standalone: true,
    imports: [CommonModule, SharedModule, TranslateModule],
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
    public articlesList?: IArticle[];

    constructor(private firestore: FirestoreService) {
    }

    async ngOnInit(): Promise<void> {
        this.articlesList = await firstValueFrom(this.firestore.getBlogArticles());
    }

    public index(index: number) {
        return index;
    }
}