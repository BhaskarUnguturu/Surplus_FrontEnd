import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FooterLineComponent } from './footer-line/footer-line.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedComponentsModule } from '../../shared-components/shared-components.module';
import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatDialogModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    SharedComponentsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    FooterLineComponent,
    SidebarComponent,
    ProfileSidebarComponent,
    ProfileSidebarComponent
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    FooterLineComponent,
    SidebarComponent,
    ProfileSidebarComponent
  ]
})
export class PublicLayoutModule { }
