import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterUserByNamePipe } from './pipe/filter-user-by-name.pipe';

@NgModule({
  declarations: [
    FilterUserByNamePipe
  ],
  imports: [ReactiveFormsModule, FormsModule],
  exports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FilterUserByNamePipe
  ]
})
export class SharedModule { }
