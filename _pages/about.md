---
layout: about
# The navbar label for this page is taken from `title` (al_folio_core's header.liquid uses the
# title of whichever page has `permalink: /`). Setting it here replaces the old hardcoded "Home".
title: Home
permalink: /
subtitle:

profile:
  align: right
  image: profile_face_no_background.png
  image_circular: true # crops the image to make it circular
  more_info:

selected_papers: true # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: false # true caps the list at 60vw and adds a scrollbar once there are >3 items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
---

I am a full professor of computer science at the University of Cologne, where I lead the research group on Trustworthy Artificial Intelligence ([TAIL](https://cs.uni-koeln.de/tail)). I am also a co-director of the [ELLIS Unit NRW](https://ellis-unit-nrw.github.io) and an [ELLIS](https://ellis.eu) Scholar.
{: .text-justify}

My research is driven by a simple question:
{: .research-lead}

How can we build AI systems that remain reliable when assumptions break?
{: .research-question}

In practice, data are noisy, incomplete, or interdependent, computational resources are limited, and deployment conditions change. My group develops models and algorithms that are robust, uncertainty-aware, interpretable, and resource-efficient, with formal guarantees whenever possible.
{: .text-justify}

This research agenda grew out of my early work on robust machine learning for graphs, where predictions depend on each other, and now extends to broader questions in `Trustworthy AI`, including networks of interacting AI agents. Before joining the University of Cologne, I was a faculty member at the CISPA Helmholtz Center for Information Security. I completed my PhD and PostDoc at the Technical University of Munich, where I worked with Stephan Günnemann.
{: .text-justify}

We have several [open positions](/positions/) in our research group covering a range of topics in machine learning.
{: .text-justify}

<h2 id="research">research</h2>

{% include theme-cards.liquid %}
