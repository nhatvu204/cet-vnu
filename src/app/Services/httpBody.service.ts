import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class httpBody{
  body:{"filters": {}[], "sorts": {}[], "includes": {}[], "pageInfo": {"page": number, "pageSize": number}} = {"filters": [], "sorts": [], "includes": [], "pageInfo": {"page": 1, "pageSize": 15}};
}
