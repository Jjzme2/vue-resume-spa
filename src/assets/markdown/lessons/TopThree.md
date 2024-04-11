# What are the best languages to learn for web development?

## What to learn first?

- HTML
- CSS
- JavaScript

As we are defining something we will have a user see, and interact with, we will be using three main
keys to unlock the door to the world of web development. These keys are HTML, CSS, and JavaScript.

### HTML

HTML is the structure or skeleton of a webpage.

A lot of the visualization of a webpage is done using squares and rectangles. These squares and
rectangles are called elements. Elements are the building blocks of a webpage. They are the things
that you see on a webpage. They are the things that you interact with on a webpage. They are the
things that you click on, type in, and read.

- For example, you are reading a file within an element right now. The element acts as a holder, or
  container for, specifically, a Markdown file. At the top of some webpages, you might see a
  navigation panel. This is also an element. The navigation panel is a container for links to other
  pages on the website. The links are also elements. The links are containers for text that, when
  clicked, will take you to another page on the website.
- This is a lot easier to read in code, so here is an example of these elements as you might see in
  code:

  ```html
  <div>
    <h1>My Website</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    </nav>
  </div>
  ```

  In this example, we have a `div` element that contains an `h1` element and a `nav` element. The
  `nav` element contains three `a` elements. The `a` elements are links to other pages on the
  website.

  - Here, the `div` acts as a container for the `h1`(Header 1) and `nav` elements.
  - The `h1` element is a container for the text "My Website".
  - The `nav` element is a container for the `a`(Anchor) elements, each one has an `href` attribute
    that points to another page on the website. You can see this because heach `.html` file is not
    prepended with a `/`. This means that we are in the same directory as the current file.

#### What are attributes?

Attributes are extra information that you can give to an element. Different elements are allowed to have different attributes. For example, the `a` element can have an `href` attribute. The `href` attribute is used to tell the browser where to go when the link is clicked. The `href` attribute is a URL. A URL is a web address. It is the address of a webpage on the internet. The `href` attribute is a URL that points to another webpage on the same website. So if we were to use `<a href="https://www.google.com">Google</a>`, when you click on the link, which will be written as 'Google' you will be taken to Google's homepage. We can also pass in other attributes to the `a` element, such as `target="_blank"`. This attribute tells the browser to open the link in a new tab. There are also some that are more versatile, such as the `class` attribute. The `class` attribute is used to give an element a class. A class is a way to group elements together for styling purposes. We will talk more about this in the CSS section.

### CSS

CSS is the style of a webpage.