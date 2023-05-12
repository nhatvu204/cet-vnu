import{Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root'
})

export class Title {
  changeTitle(title:string){
    document.title = title;
  }
  resetTitle(){
    document.title = 'TRUNG TÂM KHẢO THÍ ĐẠI HỌC QUỐC GIA HÀ NỘI'
  }
}
