import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgMaterialModule } from  './ng-material/ng-material.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from  '@angular/forms';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BlogEditorComponent } from './components/blog-editor/blog-editor.component';
import { ExcerptPipe } from './custompipes/excerpt.pipe';
import { SlugPipe } from './custompipes/slug.pipe';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogComponent } from './components/blog/blog.component';
import { NgxPaginationModule } from  'ngx-pagination';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { AngularFireAuthModule } from  '@angular/fire/auth';
import {AuthGuard } from './guards/auth.guard';
import { Test2Component } from './components/test2/test2.component';






@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    BlogEditorComponent,
    ExcerptPipe,
    SlugPipe,
    BlogCardComponent,
    BlogComponent,
    PaginatorComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    FormsModule,
    CKEditorModule,
    NgxPaginationModule,
    AngularFireAuthModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      // { path: '**', component: HomeComponent },
      // { path: 'test', component: Test2Component },
      { path: 'addpost', component:BlogEditorComponent},
      { path: 'blog/:id/:slug', component: BlogComponent },
      { path: 'page/:pagenum', component: HomeComponent },
      { path: 'editpost/:id', component: BlogEditorComponent, canActivate: [AuthGuard] },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
