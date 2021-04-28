import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WritepostComponent } from './writepost/writepost.component';
import { ReadpostComponent } from './readpost/readpost.component';
import { PostsService } from '../posts.service';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    WritepostComponent,
    ReadpostComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    WritepostComponent,
    ReadpostComponent
  ]
})
export class PostsModule { }
