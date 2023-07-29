import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./main/home-page/home-page.component";
import { BlogArticleComponent } from './main/blog-article/blog-article.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomePageComponent,
    },
    {
        path: 'home/:lang',
        component: HomePageComponent,
    },
    {
        path: 'advertiser',
        loadComponent: () =>
            import('./main/advertiser/advertiser.component').then((c) => c.AdvertiserComponent),
    },
    {
        path: 'advertiser/:lang',
        loadComponent: () =>
            import('./main/advertiser/advertiser.component').then((c) => c.AdvertiserComponent),
    },
    {
        path: 'affiliate',
        loadComponent: () =>
            import('./main/affiliate/affiliate.component').then((c) => c.AffiliateComponent),
    },
    {
        path: 'about-us',
        loadComponent: () =>
            import('./main/about/about.component').then((c) => c.AboutComponent),
    },
    {
        path: 'contacts',
        loadComponent: () =>
            import('./main/contact/contact.component').then((c) => c.ContactComponent),
    },
    {
        path: 'faq',
        loadComponent: () =>
            import('./main/fuck-you/fuck-you.component').then((c) => c.FuckYouComponent),
    },
    {
        path: 'privacy',
        loadComponent: () =>
            import('./main/privacy-doc/privacy-doc.component').then((c) => c.PrivacyDocComponent),
    },
    {
        path: 'terms',
        loadComponent: () =>
            import('./main/terms-of-use-doc/terms-of-use-doc.component').then((c) => c.TermsOfUseDocComponent),
    },
    {
        path: 'cookies',
        loadComponent: () =>
            import('./main/privacy-cookies-doc/privacy-cookies-doc.component').then((c) => c.PrivacyCookiesDocComponent),
    },
    {
        path: 'careers',
        loadComponent: () =>
            import('./main/careers/careers.component').then((c) => c.CareersComponent),
    },
    {
        path: 'blog',
        loadComponent: () =>
            import('./main/blog/blog.component').then((c) => c.BlogComponent),
    },
    {
        path: 'article/:id',
        component: BlogArticleComponent
    },
    {
        path: '**',
        redirectTo: '/home',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        anchorScrolling: 'enabled',
        onSameUrlNavigation: 'reload',
    })],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
