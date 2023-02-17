import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../../_model/Producto';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private url:string = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) { }

  public listarProductos(){
    return this.http.get<Producto[]>('https://fakestoreapi.com'+'/products');
  }

  public agregarProducto(){
    return this.http.post('https://fakestoreapi.com'+'/products', {method:"POST",
    body:JSON.stringify(
        {
            title: 'Prueba producto maleta',
            price: 66.6,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        }
    )
  });
  }

  public elimininarProducto(idProducto: number){
    return fetch(`https://fakestoreapi.com/products/${idProducto}`,{
      method:"DELETE"
  }).then(res=>res.json())
  .then(json=>console.log("Eliminado: ", json))
  }

  public agregarPro(datosProdcuto: Producto){
    return this.http.post('https://fakestoreapi.com'+'/products', {method:"POST",
    body:JSON.stringify(
        {
            title: datosProdcuto.title,
            price: datosProdcuto.price,
            description: datosProdcuto.description,
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        }
    )
  });
  }
}


