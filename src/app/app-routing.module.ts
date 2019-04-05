import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { FakultasComponent } from './fakultas/fakultas.component';
import { JurusanComponent } from './jurusan/jurusan.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';

const appRoutes: Routes = [
  {path:'mahasiswa',component: MahasiswaComponent},
    {path:'jurusan',component: JurusanComponent},  
    {path:'fakultas',component: FakultasComponent},
    {path:'user',component: UserComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'**',component:NotFoundPageComponent},
    {path:'',redirectTo:'/dashboard',pathMatch:'full'}
    
]

@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}