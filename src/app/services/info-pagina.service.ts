import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { InfoPagina } from '../interfaces/info-pagina.interface'
import { Equipo } from '../interfaces/equipo.interface'

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {}
  equipo: any[] = []

  cargada = false

  constructor (private http: HttpClient) {
    this.cargarInfo()
    this.cargarEquipo()
    // console.log("inicion de servicio de información de pagina");
  }

  private cargarInfo () {
    //Leer el JSON
    this.http
      .get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true
        this.info = resp
      })
  }

  private cargarEquipo () {
    //Leer el JSON
    this.http
      .get('https://angular-html-89da3-default-rtdb.firebaseio.com/equipo.json')
      .subscribe((resp: any) => {
        this.equipo = resp
        console.log(this.equipo)
      })
  }
}
