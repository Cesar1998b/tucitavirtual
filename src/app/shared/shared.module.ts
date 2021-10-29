import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterUserByNamePipe } from './pipe/filter-user-by-name.pipe';
import { ErrorFieldComponent } from './components/error-field/error-field.component';

@NgModule({
  declarations: [
    FilterUserByNamePipe,
    ErrorFieldComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule],
  exports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FilterUserByNamePipe,
    ErrorFieldComponent,
    MaterialModule
  ]
})
export class SharedModule { }
