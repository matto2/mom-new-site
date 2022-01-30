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

<div id="song-table">
     <div class="songs">
<h2 class="song-titles"><a href="/the-songs/songs/caring">Caring</a></h2>
    </div>
        <div class="buttons">
            <a href="/the-songs/songs/caring"><button class="round-button">Listen</button></a>
            <a href="https://buy.stripe.com/3cs9DofZQ7Ix8H6288"><button class="round-button">Buy Sheet Music</button></a>
    </div>
   </div> 



    
       
