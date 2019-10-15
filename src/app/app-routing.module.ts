import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from 'src/app/components/home/home.component';
import{GalleryComponent} from 'src/app/components/gallery/gallery.component';
import{ReviewsComponent} from 'src/app/components/reviews/reviews.component';
import{ProjectsComponent} from 'src/app/components/projects/projects.component';
import{TeamComponent} from 'src/app/components/team/team.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'testimonials', component: ReviewsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'team', component: TeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
