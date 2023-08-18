import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./main/home-page/home-page.component";
import { BlogArticleComponent } from './main/blog-article/blog-article.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomePageComponent,
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
        path: 'affiliate/:lang',
        loadComponent: () =>
            import('./main/affiliate/affiliate.component').then((c) => c.AffiliateComponent),
    },
    {
        path: 'about-us',
        loadComponent: () =>
            import('./main/about/about.component').then((c) => c.AboutComponent),
    },
    {
        path: 'about-us/:lang',
        loadComponent: () =>
            import('./main/about/about.component').then((c) => c.AboutComponent),
    },
    {
        path: 'contacts',
        loadComponent: () =>
            import('./main/contact/contact.component').then((c) => c.ContactComponent),
    },
    {
        path: 'contacts/:lang',
        loadComponent: () =>
            import('./main/contact/contact.component').then((c) => c.ContactComponent),
    },
    {
        path: 'faq',
        loadComponent: () =>
            import('./main/fuck-you/fuck-you.component').then((c) => c.FuckYouComponent),
    },
    {
        path: 'faq/:lang',
        loadComponent: () =>
            import('./main/fuck-you/fuck-you.component').then((c) => c.FuckYouComponent),
    },
    {
        path: 'careers',
        loadComponent: () =>
            import('./main/careers/careers.component').then((c) => c.CareersComponent),
    },
    {
        path: 'careers/:lang',
        loadComponent: () =>
            import('./main/careers/careers.component').then((c) => c.CareersComponent),
    },
    {
        path: 'blog',
        loadComponent: () =>
            import('./main/blog/blog.component').then((c) => c.BlogComponent),
    },
    {
        path: 'blog/:lang',
        loadComponent: () =>
            import('./main/blog/blog.component').then((c) => c.BlogComponent),
    },
    {
        path: 'article/:id',
        component: BlogArticleComponent
    },
    { path: 'privacy', loadChildren: () => import('./privacy-doc/privacy-doc.module').then(m => m.PrivacyDocModule) },
    { path: 'cookies', loadChildren: () => import('./cookies-doc/cookies-doc.module').then(m => m.CookiesDocModule) },
    { path: 'terms', loadChildren: () => import('./terms-of-use-doc/terms-of-use-doc.module').then(m => m.TermsOfUseDocModule) },
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
