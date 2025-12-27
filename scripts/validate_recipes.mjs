import fs from "fs";
import path from "path";

const RECIPES_PATH = path.join(
  process.cwd(),
  "src/content/recipes/recipes.json"
);

const allowedRisk = new Set(["Low", "Medium", "High"]);
const requiredFields = ["id", "title", "summary", "persona", "risk", "tags", "example"];

const raw = fs.readFileSync(RECIPES_PATH, "utf8");
const recipes = JSON.parse(raw);

const errors = [];

if (!Array.isArray(recipes)) {
  errors.push("recipes.json must be an array.");
} else {
  recipes.forEach((recipe, index) => {
    requiredFields.forEach((field) => {
      if (!(field in recipe)) {
        errors.push(`Recipe ${index} missing field: ${field}`);
      }
    });

    if (recipe.id && typeof recipe.id !== "string") {
      errors.push(`Recipe ${index} id must be a string.`);
    }
    if (recipe.title && typeof recipe.title !== "string") {
      errors.push(`Recipe ${index} title must be a string.`);
    }
    if (recipe.risk && !allowedRisk.has(recipe.risk)) {
      errors.push(`Recipe ${index} risk must be Low, Medium, or High.`);
    }
    if (recipe.tags && !Array.isArray(recipe.tags)) {
      errors.push(`Recipe ${index} tags must be an array.`);
    }
  });
}

if (errors.length) {
  console.error("Recipe validation failed:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log("Recipe validation passed.");
