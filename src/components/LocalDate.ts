export function localDate() {
  const date = new Date();
  return `${date.toLocaleString("en-us", {
    weekday: "long",
  })},
       ${date.getDate()}
       ${date.toLocaleString("default", { month: "long" })}
       ${date.getFullYear()}
       `;
}
