import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test', 'https://daynauan.info.vn/wp-content/uploads/2019/01/goi-cuon.jpg'),
    new Recipe('A test recipe', 'This is a test', 'https://daynauan.info.vn/wp-content/uploads/2019/01/goi-cuon.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
