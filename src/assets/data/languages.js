const webDevStartYear = 2019;
const webDevCareerStartYear = 2022;
const UnityStartYear = 2015;

const languages = [
  {
    name: "HTML",
    thoughts:
      "HTML is fundamental to web development. It forms the structure of web pages. I think this is a pivotal language to learn when starting out in web development.",
    years: new Date().getFullYear() - webDevStartYear,
  },
  {
    name: "CSS",
    thoughts:
      "CSS is essential for styling web pages and creating a user-friendly interface. I think this is a pivotal language to learn when starting out in web development.",
    years: new Date().getFullYear() - webDevStartYear,
  },
  {
    name: "JavaScript",
    thoughts:
      "JavaScript is the programming language of the web. It's used to create dynamic and interactive web pages. I think this is a pivotal language to learn when starting out in web development.",
    years: new Date().getFullYear() - webDevStartYear,
  },
  {
    name: "C#",
    thoughts:
      "C# is a versatile language. It's used in Unity for game development and in ASP.NET for web development. I would like to learn more about it, I've seen it used in a lot of places.",
    years: new Date().getFullYear() - UnityStartYear,
  },
  {
    name: "ColdFusion",
    thoughts:
      "ColdFusion is a tag-based language that is used to create dynamic web pages. It's a language that I've used a lot recently, but I think it is becoming less popular in the industry.",
    years: new Date().getFullYear() - webDevCareerStartYear,
  },
  {
    name: "SQL",
    thoughts:
      "SQL is a language used to manage and manipulate databases. I think it's a good language to know, especially when working with databases.",
    years: new Date().getFullYear() - webDevCareerStartYear,
  },
];

export default languages;
