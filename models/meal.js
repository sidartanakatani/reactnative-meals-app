class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGluttenFree,
    isVegan,
    isVegetatian,
    isLactoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.isGluttenFree = isGluttenFree;
    this.isVegan = isVegan;
    this.isVegetatian = isVegetatian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
