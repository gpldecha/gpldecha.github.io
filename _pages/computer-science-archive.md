---
title: "Computer science"
layout: single
permalink: /cs/
collection: cs
header:
  overlay_image: images/code2.jpg
  caption: "Photo credit: [**Unsplash**](http://feelgrafix.com/997342-code.html)"

excerpt: "A collection of computer science articles"

author_profile: false
---


{% for post in site.cs %}
  {% include archive-single.html %}
{% endfor %}
