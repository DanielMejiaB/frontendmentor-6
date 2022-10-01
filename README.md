# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Interactive rating component solution](#frontend-mentor---interactive-rating-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JavaScript
- BEM

### What I learned

- Animations in Css

```css
@keyframes fadeOutLeft {
    0% {
        opacity: 1;
        transform: translateX(0);
    }

    100% {
        opacity: 0;
        transform: translateX(-40rem);
    }
}
```

- animationend and transitionend events in js

```js
error.addEventListener('animationend', function () {
            this.classList.remove("showDown");
            this.classList.add("hidden");
        }.bind(error));
```

### Useful resources

- [CSS Keyframes](https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp) - This helped learning how to add keyframes animations in css

## Author

- Github - [DanielMejiaB](https://github.com/DanielMejiaB)
- Frontend Mentor - [@DanielMejiaB](https://www.frontendmentor.io/profile/DanielMejiaB)
- Linkedin - [Daniel Mejia Benjumea](https://www.linkedin.com/in/daniel-mej%C3%ADa-benjumea-05104b153/)
