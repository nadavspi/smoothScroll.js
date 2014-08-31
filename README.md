# smoothScroll.js

A tiny jQuery plugin for creating smooth-scrolling links within a page.

By default, creates a back-to-top link with a one second animation:

```
$(".footer__back-to-top").smoothScroll();
```

Accepts options for target and animation duration (in milliseconds):

```
$(".footer__back-to-top").smoothScroll({
	target: "#header",
	duration: 500
});
```
