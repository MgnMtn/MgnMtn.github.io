---
layout: page
title: Identifying Pseudo-tested Statements
description: Deleting code statements to see if the test suite notices!
img: assets/img/publication_preview/maton2024b.png
importance: 2
category: research
related_publications: true
github: PseudoTested/PseudoSweep
language: Java
topics: [mutation-testing, pseudo-tested, gradle]
---

I built [PseudoSweep](https://github.com/PseudoTested/PseudoSweep), a tool that automatically
identifies pseudo-tested methods and statements in Java projects. It instruments the code, runs the test suite, and
reports which covered code the tests would not notice going missing. There's a
[demo project](https://github.com/PseudoTested/pseudosweep-demo) and a
[video walkthrough](https://www.youtube.com/watch?v=5QCsu7MbiXI) if you'd like
to try it {% cite Maton2024a %}.

## Where tests fall short

Pseudo-tested statements are one kind of _oracle gap_: covered code that isn't checked by an assertion. In my
ESEM 2025 paper, I compared three ways of finding oracle gaps using
checked coverage using a dynamic slicer, checked coverage using an observational slicer, and pseudo-tested statement
identification.

Pseudo-tested statement identification found the gaps that most need attention (they had the lowest median mutation
score) and was by far the quickest, with a median of about 20 seconds compared
with minutes, hours or days for the
slicing-based approaches {% cite Maton2025 %}.

