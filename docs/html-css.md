![header-wtm.png](images/header-wtm.png)
#HTML & CSS Workshop
<br>

#### HTML & CSS Documentation
---
During our workshops we’re going to develop parts of our WTM Hamburg Website together. 

We’ll start with the HTML and CSS for the homepage.
 
This document will give you a general definition of what HTML and CSS are, and show you some of the rules that both languages follow.

You can refer to this documentation at all workshops, during the development of your tasks.

<br>

#### What is HTML?
---
HTML stands for Hypertext Markup Language.

HTML is a set of markup text, strings of words, placed in a special format that gives structure and layout to a page, and which web browsers are able to display.

The markup tells the web browser how to display a web page's text and images for the user. 

Each individual markup code is referred to as an element (but many people also refer to it as a tag).

<br>

#### <!DOCTYPE html>
---
The `<!DOCTYPE>` declaration must be the very first thing in your HTML document, before the `<html>` tag.

The `<!DOCTYPE>` declaration informs the browser which version of HTML (or XML) you used to write the document. Doctype is a declaration, not an HTML tag.

Read further: 
https://developer.mozilla.org/en-US/docs/Glossary/Doctype

<br>

#### HTML Comments
---
HTML Comments are pretty self explanatory, they let you add notes and other hints that help you understand what’s going on in your own code.

They also help other developers looking into your code. To have an easier understanding of why you wrote certain HTML elements.

You’ll find in our handouts many HTML comments, as well as inside the .html files.

```html
<!-- I am an HTML comment. And I’m not displayed in the browser -->

<!-- I am also an HTML comment. I’m only displayed in the markup -->
```

Read further:
https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/The_Importance_of_Correct_HTML_Commenting

<br>

#### What is CSS?
---
CSS stands for Cascading Style Sheets.

CSS is a style language  that styles the presentation of the structured information in HTML layouts. For example, CSS can manipulate and edit fonts, colors, margins, lines, height, width, background images, advanced positions and many other things.

<br>

##### Introduction to CSS Selectors
---
CSS selectors are part of a CSS rule set that actually selects the content you want to style. They can be classified into several categories, but we’re only going to focus on the following selectors:

<br>

##### 1. Universal Selector
A wildcard character `*` that selects all elements on a page.

```css
* {
  margin: 0; 
}
```

<br>

##### 2. Element Type Selector
Also referred to simply as a “type selector”. This selector must match one or more HTML elements of the same name. E.g. A selector of `<ul>` would match all HTML unordered lists, or `<ul>` elements.

```htmlmixed
<ul>
  <li></li>
  <li></li> 
</ul>
```

```css
ul {
  color: red; 
}
```

<br>

##### 3. Class Selector
The most useful of all CSS selectors. It’s declared with a dot  . preceding a string of one or more characters defined by the developer. This selector matches all elements on the page that have their class attribute set to the same value as the class name in the selector.

```htmlmixed
<div class=”color-­black”></div>
 
<section class=”color­-black”></section>
 
<h2 class=”color-­black”></h2>
```

```css
.color-­black { 
  color: black; 
}
```

<br>

##### 4. Descendant Combinator
This selector is called “combinator”, since it allows you to combine two or more selectors so you can be more specific in your selection method when you define your CSS.

```html
<div class=”container”>
   <div class=”box”></div>
</div>
```

```css
.container .box { 
  margin-top: 20px; 
}
```

<br>

##### 5. Pseudo Class
This selector uses a colon character to identify a pseudo-state that an element might be in the state of being hovered (mouse over) in the browser, or in the state of being focused.
You can always apply multiple CSS rules to multiple selectors at one, like the following example.

```css
.text:hover, 
.text:focus {
   text-­decoration: none; 
}
```

<br>

##### 6. Adjacent Sibling Combinator
This selector uses the plus symbol `+`, and targets an element that must be an immediate sibling. 

```
<h2>Headline</h2>
<p>I am some text sibling of that headline above.</p>
```

```css
h2 + p {
   font-size: 16px;
}
```

<br>

#### Introduction to CSS Properties & Values
---
CSS properties are the keys that allow you to style your HTML elements via CSS selectors in your web page. 

The CSS values are all the options each CSS property contains. 
Some CSS properties contain completely different values, and others contain the same as others.

Let’s take for example the CSS properties “margin” and “padding”, both of them can contain exact same values given in “px”, “em” or “%”.

The same happens with the CSS properties “text-align” and “float”. Both of them can contain the same exact value of “right” or “left”.

On the contrary, the CSS properties “background-color” and “background-repeat”, not always can contain the exact same values.

For example, “background-color”, could have a value in “color code or name”, “transparent”, but never a repeat value.

And “background-repeat”, could have a value of “repeat”, “repeat-x”, “repeat-y”, “no-repeat”, but never a color value.

The CSS property is always declared first (to the left), and right after a colon (:) and space, its desired CSS value (to the right).

```css
float: right; 
color: red;
padding-­top: 20px;
```

Read further:
http://www.sitepoint.com/web-foundations/css-selectors/

<br>

#### CSS Comments
---
CSS Comments are pretty self explanatory, they let you add notes and other hints that help you understand what’s going on in your own code.

They also help other developers looking into your code. To have an easier understanding of why you wrote certain CSS properties, values or selectors.

You’ll find in our handouts many CSS comments, as well as inside the style.css file and the framework’s css files.

```css
/* A singled inline CSS comment will look like this. */

/*  
This a longer CSS comment,
that takes more than 1 line.
Takes severals lines of space in fact.
*/

/* =======================================================================
This a CSS comment that might be a headline (section/module title) comment.
========================================================================== */
```

Read further:
https://developer.mozilla.org/en-US/docs/Web/CSS/Comments

<br>

####Happy Coding!
Women Techmakers HH Team
