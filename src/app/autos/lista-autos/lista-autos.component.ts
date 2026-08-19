import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Auto } from "src/app/datos/autos";
import { AutosService } from "src/app/shared/autos.services";


@Component({
    selector: "lista-autos",
    templateUrl: "./lista-autos.component.html",

})    

export class ListaAutosComponent implements OnInit {

    faStar = faStar;
    starsList = [];
    

    tituloListaAutos: string = "Lista de Automóviles";
    listaAutos: Auto[] = [];
    listaAutosFiltrados: Auto[] = [];

    imageWidth = 150;
    imageMargin = 2;

    muestraImagen : boolean = false;
    arregloAutos: string [] = ["uno"]

    private _filtro: string = "";

get filtro(): string {
    return this._filtro;
}

set filtro(filtrarPor: string) {
    this._filtro = filtrarPor;

    this.listaAutosFiltrados = this.listaAutos.filter(
        (auto: Auto) =>
            auto.marca
                .toLocaleLowerCase()
                .includes(filtrarPor.toLocaleLowerCase())
    );
}
  
    onClickCalificacion (mensaje: string): void {

        alert("Dieron click en la calificacion " + mensaje );
        
    }



constructor(private _autosService: AutosService  ) {}
    

ngOnInit(): void {
    this.listaAutos = this._autosService.obtenListaAutos();
    this.listaAutosFiltrados = this.listaAutos;
    
    this.listaAutos = [
        {
            id: 1,
            marca: "Toyota",
            modelo: "Corolla",
            anio: 2011,
            color: "Plateado",
            kilometros: 160000,
            precio: 2500,
            calificacion: 4,
            imagenUrl: 'assets/imagenAutos/corolla2011.jpg'
        },
        {
            id: 2,
            marca: "Chevrolet",
            modelo: "Silverado",
            anio: 2023,
            color: "Azul",
            kilometros: 300000,
            precio: 18000,
            calificacion: 5,
            imagenUrl: 'assets/imagenAutos/silverado.jpg'

        },
        {
            id: 3,
            marca: "Chevrolet",
            modelo: "Tahoe",
            anio: 2023,
            color: "Plateado",
            kilometros: 100000,
            precio: 15000,
            calificacion: 4,
            imagenUrl: 'assets/imagenAutos/tahoe20232.jpg'
        },
        {
            id: 4,
            marca: "Daihatsu",
            modelo: "Terio Bego",
            anio: 2012,
            color: "Gris",
            kilometros: 170000,
            precio: 5000,
            calificacion: 4,
            imagenUrl: 'assets/imagenAutos/terioBego.jpg'
        },
        {
            id: 5,
            marca: "Toyota",
            modelo: "Yaris",
            anio: 2007,
            color: "Azul",
            kilometros: 100000,
            precio: 4500,
            calificacion: 4,
            imagenUrl: 'assets/imagenAutos/yaris.jpg'
        }
    ];

    this.listaAutosFiltrados = this.listaAutos;
    
    
}


muestraImagenes(): void {
    this.muestraImagen = !this.muestraImagen
}


}

