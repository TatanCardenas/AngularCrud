import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/_model/Producto';
import { HttpClient } from '@angular/common/http';
import { TareaService } from './Services/tarea.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'crud';
  form: FormGroup;
  public producto = new Producto();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  displayedColumns: string[] = ['idProducto', "img", 'nombre',"precio", "comprar"];
  dataSource = new MatTableDataSource<Producto>();

  constructor(public httpClient: HttpClient, private tareaServices : TareaService, public route: ActivatedRoute,
    private snackBar: MatSnackBar, private formBuilder: FormBuilder) { 
  }

  async ngOnInit() {

    this.tareaServices.listarProductos().subscribe(async data =>{
      this.dataSource = new MatTableDataSource(data);
      /*this.dataSource.sort = this.sort;*/
      console.table(data);
      this.dataSource.paginator = this.paginator;
    });

    this.buildFrom();
    
    //this.mostrar = false;
    
  }

  private buildFrom() {
    
    this.form = this.formBuilder.group({
      
      nombre: [this.producto.title, [Validators.required,Validators.maxLength(23), Validators.minLength(3)]],
      precio: [this.producto.price, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      descripcion: [this.producto.description,[Validators.required, Validators.minLength(5), Validators.maxLength(12)]],

    });
  }

  filter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }

  agregar(): void{
    this.tareaServices.agregarProducto().subscribe(data=>{
      console.log(data)
      this.openSnackBar("Agregado");
    }); 
  }

  agregarP(){
    this.producto = this.form.value;
    
    this.tareaServices.agregarPro(this.producto).subscribe(data=>{
      this.openSnackBar("Producto agregado correctamente");
      console.log(data)
    });
  }

  comprarP(id: number){
    console.log("Id producto de compra: ", id);
  }

  eliminarP(id: number){
    if(id != null){
      this.tareaServices.elimininarProducto(id);
    }
  }

  private openSnackBar(mensaje: string) {
    this.snackBar.open(mensaje, 'Información', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
