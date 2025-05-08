import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { LandingComponent } from './content/landing/landing.component';
import { AboutUsComponent } from './content/about-us/about-us.component';
import { GoalComponent } from './content/goal/goal.component';
import { EventComponent } from './content/event/event.component';
import { BlogsComponent } from './content/blogs/blogs.component';
import { GalleryComponent } from './content/gallery/gallery.component';
import { DonetionComponent } from './content/donetion/donetion.component';
import { BecomeSayamsevakComponent } from './content/become-sayamsevak/become-sayamsevak.component';

export const routes: Routes = [
    {
         path:'',
         component:ContentComponent,
         children:[
            {
                path:'',
                pathMatch:'full',
                redirectTo:'home'
            },
            {
                path:'home',
                component:LandingComponent
            },
            {
                path:'aboutus',
                component:AboutUsComponent
            },
            {
                path:'goal',
                component:GoalComponent
            },
            {
                path:'event',
                component:EventComponent
            },
            {
                path:'blogs',
                component:BlogsComponent
            },
            {
                path:'gallery',
                component:GalleryComponent
            },
            {
                path:'donetion',
                component:DonetionComponent
            },
            {
                path:'becomesayamsevak',
                component:BecomeSayamsevakComponent
            },
         ]
    }
];
