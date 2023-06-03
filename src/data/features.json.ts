export interface Template {
  url: string;
  title: string;
};
const one: Template = {
  url: "https://bytes.dev/archives/29#:~:text=WickedBlocks%20is%20a%20collection%20of%20120%2B%20layout%20blocks%20and%20components%20built%20with%20Tailwind%20CSS%20ready%20to%20copy%2Dpaste%20into%20your%20Tailwind%20project.%20If%20you%27d%20like%20the%20New%20England%20version%2C%20check%20out%20WickedBlachs.%20My%20boy%27s%20wicked%20smaht",
  title: "Bytes UI"
};
const two: Template = {
  url: "https://www.producthunt.com/@michael_andreuzza/made",
  title: "Producthunt"
};
const three: Template = {
  url: "https://buttondown.email/alpinejs/archive/alpinejs-weekly-72/#:~:text=Vertical%20tabs%20with%20Alpine.js%20by%20%40Mike_Andreuzza",
  title: "Alpinejs Weekly"
};
const four: Template = {
  url: "https://buttondown.email/alpinejs/archive/alpinejs-weekly-72/#:~:text=Vertical%20tabs%20with%20Alpine.js%20by%20%40Mike_Andreuzza",
  title: "Alpinejs Weekly"
};
const five: Template = {
  url: "https://github.com/bradtraversy/design-resources-for-developers",
  title: "Brad Traversy"
};
const six: Template = {
  url: "https://speckyboy.com/weekly-news-for-designers-610/#:~:text=A%20color%20and%20typography%20system%20for%20designers.%20Compatible%20with%20Figma%2C%20Sketch%20and%20more",
  title: "Specky Boy"
};
const seven: Template = {
  url: "https://tympanus.net/codrops/collective/collective-608/#:~:text=Colors%20%26%20Fonts%20is%20a%20curated%20library%20of%20colors%20and%20fonts%20for%20digital%20designers%20and%20web%20developers",
  title: "Code drops"
};
const eight: Template = {
  url: "https://www.youtube.com/watch?v=LQw2ljPHJU0&t=606s",
  title: "Gary Simons"
};
const nine: Template = {
  url: "https://www.youtube.com/watch?v=IfybAqUqXHc&t=175s",
  title: "Laravel Daily"
};
const ten: Template = {
  url: "https://github.com/arthurspk/guiadevbrasil",
  title: "Guia Dev Brasil"
};
export const byName = {
one, two, three, four, five, six, seven, eight, nine, ten





};
export const features = Object.values(byName);
