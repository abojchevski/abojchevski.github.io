---
layout: page
permalink: /publications/
title: Publications
description: publications in reversed chronological order <br> * denotes equal contribution
# NOTE: add each new year here, otherwise entries for that year are silently omitted.
years: [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017]
nav: true
nav_order: 1
---

<div class="publications">

<p>An up-to-date list is available on <a href="https://scholar.google.com/citations?user=F1APiN4AAAAJ">Google Scholar</a>.</p>

<!--
  `--group_by none` is required on every call: _config.yml sets `scholar.group_by: year`, so
  without it jekyll-scholar emits its own "h2.bibliography" year heading on top of the
  "h2.year" headings below, and every year appears twice.
-->

<h1>conferences &amp; journals</h1>
{% for y in page.years %}
<h2 class="year">{{ y }}</h2>
{% bibliography --group_by none -f papers -q @*[year={{ y }},category=conference]* %}
{% endfor %}

<h1>workshops</h1>
{% bibliography --group_by none -f papers -q @*[category=workshop]* %}

<h1>theses</h1>
{% bibliography --group_by none -f papers -q @*[category=thesis]* %}

</div>
