import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutosService } from 'src/app/shared/autos.services';
import { Auto } from '../../datos/autos';


@Component({
  templateUrl: './detalle-autos.component.html',
  styleUrls: ['./detalle-autos.component.css']
})
export class DetalleAutosComponent implements OnInit {

  tituloPagina= "Detalle del Auto";
  auto: Auto = new Auto;
  listaAutosFiltrados: any;
  imageWidth: any;
  imageMargin: any;
  muestraImagen: any;  

  constructor( private _activatedRoute: ActivatedRoute,
    private _autosService: AutosService, private _router: Router ) {}
    
    ngOnInit(): void {
      let id = Number( this._activatedRoute.snapshot.paramMap.get('id') );
      this.auto = this._autosService.obtenAuto(id)!;
      this.tituloPagina += ": " + id;
    }

      onBack(): void {
        this._router.navigate([ '/autos' ]);
      }
}
