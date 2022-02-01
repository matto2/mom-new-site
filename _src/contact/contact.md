---
layout: base
title: contact
---


<nav>
    <ul class="nav">
      <li><a href="/">Home</a></li>
      <li><a href="/the-songs/">The Songs</a></li>
      <li class="active"><a href="/sheet-music">Contact</a></li>
    </ul>
  </nav>

<div class="form">
<form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email <input type="email" name="email" /></label>
  </p>
  <!-- <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p> -->
  <p>
    <label>Message <textarea name="message"></textarea></label>
  </p>
  <p>
    <button class="round-button" type="submit">Send</button>
  </p>
</form>
</div>