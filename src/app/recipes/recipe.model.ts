// export type Recipe = {
//   name: string;
//   description: string;
//   imagePath: string;
// };

//I guess class if you want to use constructor
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
