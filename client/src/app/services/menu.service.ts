import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu: any = []
  menubrand: string = "Traditional Food";

  constructor(private http: HttpClient) {
  }
  getmenu():Observable<any>{
    return this.http.get("http://localhost:3000/menu/get")
  }
  getMenuBychef(id:Number){
    return this.http.get("http://localhost:3000/menu/get/" + id)
  }
  postmenu(menuObject: any,urlPic : any, id : number) {
    return this.http.post("http://localhost:3000/menu/post", {...menuObject,urlPic,id})
  }
  deletemenu(ID_menu:Number) {
    return this.http.delete("http://localhost:3000/menu/delete/"+ ID_menu)
  }
  updateMenu(ID_menu:Number , MenuObj : any){
    return this.http.put('http://localhost:3000/menu/update/'+ ID_menu , MenuObj)
  }
}
