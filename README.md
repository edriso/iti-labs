# iti-labs

Thanks for checking my lab works! There's a branch for each lab.

#### 5 Stars Courses Evaluation Code:

I used this code to quickly evalute the long and time consuming courses evaluation

```javascript
document.querySelectorAll('tr > td > div > input[type="hidden"]').forEach(elm => {
   elm.setAttribute('value', '5');
});

document.querySelectorAll('a[title="0"]').forEach(elm => {
   elm.setAttribute('title', '5');
});

document.querySelectorAll('.ratingStar').forEach(elm => {
   elm.classList.remove('emptyRatingStar');
   elm.classList.add('filledRatingStar'); 
});
```

[Demo](https://www.awesomescreenshot.com/video/15183354?key=51d291750b51b058f043318b3a6d425b)
