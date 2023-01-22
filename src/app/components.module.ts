import { AddProviderComponent } from './pages/provider-tamplate/add/add';
import { PaginationComponent } from './components/pagination/pagination';
import { TitlePageComponent } from './components/title-page/title-page';
import { ProviderTemplateComponent } from './pages/provider-tamplate/provider-tamplate.component';
import { GapsiInfoComponent } from './components/gapsi-square/gapsi-square';
import { ContainerComponent } from './components/container/container';
import { MaterialModule } from './material.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgModule } from '@angular/core';
import { SpinnerOverlayComponent } from './components/spinner-overlay/spinner-overlay.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GalleryUrlComponent } from './components/gallery/gallery.component';
import { HeaderUxComponent } from './components/header/header.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({ 
  declarations: [
    SpinnerOverlayComponent,
    SpinnerComponent,
    GalleryUrlComponent,
    HeaderUxComponent,
    ContainerComponent,
    LayoutComponent,
    HomeComponent,
    GapsiInfoComponent,
    ProviderTemplateComponent,
    TitlePageComponent,
    PaginationComponent,
    AddProviderComponent
  ],
  exports: [
    SpinnerOverlayComponent,
    SpinnerComponent,
    GalleryUrlComponent,
    HeaderUxComponent,
    ContainerComponent,
    LayoutComponent,
    HomeComponent,
    GapsiInfoComponent,
    ProviderTemplateComponent,
    TitlePageComponent,
    PaginationComponent,
    AddProviderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    MaterialModule,
    RouterModule
  ],
})
export class ComponentsModule {}
