---
layout: page
permalink: /publications/
title: Publications
description: publications in reversed chronological order <br> * denotes equal contribution
nav: true
nav_order: 1
---

<div class="publications">

<p>An up-to-date list is available on <a href="https://scholar.google.com/citations?user=F1APiN4AAAAJ">Google Scholar</a>.</p>

<!--
  Years are derived from the bibliography, not listed here: _config.yml sets
  `scholar.group_by: year` and `group_order: descending`, so jekyll-scholar emits one
  `h2.bibliography` heading per year that has entries. Adding a paper in a new year needs no
  change to this file. al_folio_core styles `h2.bibliography`; a hand-rolled `h2.year` is
  unstyled, which is why the year separators must come from jekyll-scholar.

  The workshops and theses sections pass `--group_by none` deliberately: they are short and read
  better as flat, undivided lists.
-->

<h1>conferences &amp; journals</h1>
{% bibliography -f papers -q @*[category=conference]* %}

<h1>workshops</h1>
{% bibliography --group_by none -f papers -q @*[category=workshop]* %}

<h1>theses</h1>
{% bibliography --group_by none -f papers -q @*[category=thesis]* %}

</div>
