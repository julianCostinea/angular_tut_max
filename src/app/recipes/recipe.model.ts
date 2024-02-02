// export type Recipe = {
//   name: string;
//   description: string;
//   imagePath: string;
// };

import { Ingredient } from '../shared/ingredient.model';

//I guess class if you want to use constructor
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
