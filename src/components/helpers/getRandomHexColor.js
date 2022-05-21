export default function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// const randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
