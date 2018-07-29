import Occupation from "./app/occupation";

document.querySelectorAll('prefix').forEach((element) =>
{
  const occupation = new Occupation(element);
  occupation.init();
});