import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WritepostComponent } from './writepost/writepost.component';
import { ReadpostComponent } from './readpost/readpost.component';
import { PostsService } from '../posts.service';




@NgModule({
  declarations: [
    WritepostComponent,
    ReadpostComponent
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WritepostComponent,
    ReadpostComponent
  ]
})
export class PostsModule { }
