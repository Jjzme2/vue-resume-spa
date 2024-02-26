# The importance of SOC

## What is SOC?

SOC stands for **Separation of Concerns**. This is a design principle for separating a computer
program into distinct sections, such that each section addresses a separate concern. A **concern**
is a set of information that affects the code of a computer program.

## Why is SOC important?

SOC is important because it allows for the development of a more modular and maintainable codebase.
This is because it allows for the separation of concerns, which makes it easier to understand and
maintain the code.

## How does SOC help?

### Within a Single File

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background-color: lightblue;
      }

      h1 {
        color: white;
        text-align: center;
      }

      p {
        font-family: verdana;
        font-size: 20px;
      }
  </style>
  </head>

  <body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

### With Multiple Files

```html
<!DOCTYPE html>
<html>
  <head>
    <link
      rel="stylesheet"
      type="text/css"
      href="mystyle.css"
    />
  </head>

  <body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

And the `mystyle.css` file:

```css
body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}
```

### Comparison

Both examples produce the same result, but the second example is much easier to maintain and read. You know exactly where to go, no matter how large the HTML file gets.

## Conclusion

SOC is important because it allows for the development of a more modular and maintainable codebase. This is because it allows for the separation of concerns, which makes it easier to understand and maintain the code.

As you dive deeper into coding, you will find many examples of how things can be separated into different concerns. A really popular example is the MVC (Model-View-Controller) pattern. This is a pattern that separates the concerns of the application into three different sections: the model, the view, and the controller.

