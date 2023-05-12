import{Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root'
})

export class HeaderChange{
  changeHeader(header: string){
    const headerElement: HTMLElement = document.querySelector('.header')!;
    headerElement.innerHTML = '<h3>'+header+'</h3>';
  }
  // resetHeader(){
  //   const headerElement: HTMLElement = document.getElementById('added-header')!;
  //   headerElement.remove();
  // }

}
