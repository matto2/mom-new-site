---
layout: base
title: The Songs
---

<div class="container">
<nav>
    <ul class="nav">
      <li><a href="/">Home</a></li>
      <li class="active"><a href="/the-songs/">The Songs</a></li>
      <li><a href="/sheet-music">Sheet Music</a></li>
    </ul>
</nav>

# The Songs

  <ul>
{% for song in collections.songs %}
  <li><a href="{{ song.url }}">{{ song.data.title }}</a></li>
{% endfor %}
</ul>

</div>