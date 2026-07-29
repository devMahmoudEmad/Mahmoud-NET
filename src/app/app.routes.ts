import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page';
import { ProjectsOverviewComponent } from './pages/projects-overview/projects-overview';
import { ProjectHisComponent } from './pages/project-his/project-his';
import { ProjectRepairShopComponent } from './pages/project-repair-shop/project-repair-shop';
import { ProjectRaqmiyaComponent } from './pages/project-raqmiya/project-raqmiya';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'projects', component: ProjectsOverviewComponent },
  { path: 'projects/hospital-information-system', component: ProjectHisComponent },
  { path: 'projects/repair-shop-management', component: ProjectRepairShopComponent },
  { path: 'projects/raqmiya-ecommerce', component: ProjectRaqmiyaComponent },
  { path: '**', redirectTo: '' },
];
