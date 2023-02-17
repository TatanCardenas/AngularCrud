import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatButtonModule,
    ReactiveFormsModule 
  ], exports :[
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatButtonModule,
    ReactiveFormsModule 
  ]
})
export class MaterialModule { }
