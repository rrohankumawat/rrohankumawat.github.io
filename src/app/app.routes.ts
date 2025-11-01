import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) },
  { path: 'blogs', loadComponent: () => import('./blogs/blogs.component').then(m => m.BlogsComponent) },
  { path: 'youtube', loadComponent: () => import('./youtube/youtube.component').then(m => m.YoutubeComponent) },
  { path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) },
  { path: 'privacy', loadComponent: () => import('./privacy/privacy.component').then(m => m.PrivacyComponent) },
  { path: 'terms', loadComponent: () => import('./terms/terms.component').then(m => m.TermsComponent) },
  { path: '**', redirectTo: '' }
];

