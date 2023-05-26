import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class httpBody{
  body:{"fields":string, "filters": {}[], "sorts": {}[], "includes": {}[], "pageInfo": {"page": number, "pageSize": number}} = {"fields":"", "filters": [], "sorts": [], "includes": [], "pageInfo": {"page": 1, "pageSize": 15}};
}
