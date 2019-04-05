import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule ,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatSidenavModule,
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
  MatCardModule,
  MatGridListModule,
  MatTableModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatSnackBarModule,
  MatDialogModule,
  MatDialogRef,
  MatPaginatorModule,
  MatSortModule, 
  MatExpansionModule
} from '@angular/material';
import { CustomNotificationComponent } from './custom-notification/custom-notification.component';
import { NotificationResultComponent } from './notification-result/notification-result.component';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import { HikariModalComponent } from './hikari-modal/hikari-modal.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FakultasComponent } from './fakultas/fakultas.component';
import { JurusanComponent } from './jurusan/jurusan.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    NotFoundPageComponent,
    CustomNotificationComponent,
    NotificationResultComponent,
    DialogConfirmComponent,
    HikariModalComponent,
    FakultasComponent,
    JurusanComponent,
    MahasiswaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    MatDatepickerModule,
    AppRoutingModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSortModule,
    MatPaginatorModule,
    FlexLayoutModule  ,
    MatExpansionModule
    
  ],
  providers: [CustomNotificationComponent,NotificationResultComponent,DialogConfirmComponent,{provide: MatDialogRef, useValue: {}}],
  bootstrap: [AppComponent],
  entryComponents: [CustomNotificationComponent,NotificationResultComponent,DialogConfirmComponent],
  exports:[MatSortModule]
})
export class AppModule { }
