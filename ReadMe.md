# Lesson's Learned

## 2022 02 28 | Re-attacking the 2nd Ex
Completed with the JS code I had from before.  Although, I can see there are better ways to complete this.  I'll try to implement those processes in the next Ex


---

## 2022 02 23 | YouTube
Watched some videos.  I found a few things that might help with the JS HB. First, ```document.querySelector(".hamburger");``` might be easier to grab elements.  Second, I don't need to create a function to place it into an eventListener. I can use an anonymous function (arrow).  Here is an example:
```javascript
    hamburger.addEventListener("click", ()=> {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
})
```
Third, there is a method called ```.classList``` with several attributes that can be used.  This might be better than me trying the ```.getAttribute()```.  I will read the docs on the subject and then try to use it to finish this project.


---

## 2022 02 22 | Second 'Simple' Challenge
This was very challenging.  I think I am about 90% completed with the project. Additional items included into this Ex were a JS Quote gen function.  This is placed in the aside tag.  The function uses a Math.random function and pulls from an array of objects (which hold a quote and author for every obj).  A var grabs an obj from the array and outputs the quote and author to the HTML tags.  Next, I think I need to do a JS function to call the mobile menu from the hamburger icon. I'll ask the instructor if this can be done strictly in CSS.

### 2200 | 97%
I estimate that I am very close to completing this generic business Ex.  I am stuck on trying to validate whether an element has the visibility style attribute set to hidden or visible.  Depending on the result, a mobile menu will be toggled on or off.  Afterwards, all I have to do is 'nudge' pixels around to better emulate what I see from the PDF representation.  


---

## 2022 02 21 | First 'Simple' Challenge
Completed the First Project!!!  During this Ex, we were tasked to create a "Coming Soon" page.  It is regarded as a "simple" project.  However, I did learn a lot of interesting things while working on the page.  First, I needed to create a black "banner" above and below the main page.  I thought I should do this with margin, but that only caused the page scroll to show when the main section was larger than the page.  This was not desired.  I figured that I could add a border top and bottom of a hundred px (black) to get the desired results. Then, I could set the main section to take up the vp height.  Result: no scroll.  Second, I added the JS to the actual page.  While the code is a little confusing, I think I can understand what it is doing.  The results of the code is used in the HTML document to show "how many days are left."  The deadline is currently set to New Years Eve of 2023 (2022 12 31 2359.59).  When the time is up, the text will change to "It is here!"  

### 1130 | Set up 2nd Challenge
Started. Probably upd to about 45% completed.

---

## 2022 02 17 | Review Contents
Looking through this, I believe I will need to complete the lessons in our current curriculum.  This will be something to work on during the three-day weekends.

---
# CSS Bonus Challenges

This repo contains various example UI's that may be used to practice HTML and CSS styling. The UI's are roughly grouped by level of complexity. No CSS frameworks should be used. Using CSS Grid, Flexbox, and SASS will be helpful but not required. For determining colors, if using a Mac, use the Digital Color Meter to determine the correct color. Again, no CSS frameworks should be used but building a custom grid system may be helpful. 

Each example UI contains images needed, a list of formal specifications, and in some cases, a GIF to illustrate functionality. Additional fonts and icons may need to be imported.
