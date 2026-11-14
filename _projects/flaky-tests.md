---
layout: page
title: FlakeFighters
description: Detecting and Classifying Flaky Tests
img:
importance: 2
category: software
related_publications: true
github: test-flare/pytest-flakefighters
language: Python
topics: [flaky-tests, pytest]
---

A test is _flaky_ when it can pass and fail on the same code. When a flaky test fails, it slows everyone down:
CI pipelines go red for no reason, developers rerun jobs until they turn green, and real failures start to get ignored.

[FlakeFighters](https://github.com/test-flare/pytest-flakefighters) is a pytest plugin, built as part of the
[TestFLARE](https://test-flare.github.io/) project, that tries to answer the question:
_is this a genuine failure, or is it flaky?_

## What it does

Most existing pytest plugins deal with flakiness by rerunning failed tests until they pass. FlakeFighters instead
brings together several flaky-test detection techniques from research, which it calls "flakefighters", and uses them
to classify each failure as **genuine** or **flaky**.

Flaky failures are reported separately and can optionally be rerun or suppressed, so they don't block a CI/CD pipeline.
Results can be written to JSON, HTML or JUnit XML, and test history can be kept in a local or remote database.

```bash
uv add --dev pytest-flakefighters
uv run pytest --flakefighters
```

## My contribution

My role on FlakeFighters has been **supporting the work and reviewing code** rather than leading development.

- **Code review:** I review and merge pull requests from the team, checking that
  changes are correct, consistent and clearly documented.
- **Supporting the project:** I help with the wider work around the tool,
  including contributing to project decision meetings, raising issues and
  creating material, such as the poster below, to share the work with others in
  the field.

## Poster

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/ase26-flakefighters-poster.png" class="img-fluid rounded z-depth-1" alt="ASE 2026 poster: pytest-flakefighters, a suite of tools for detecting and classifying flaky test failures" zoomable=true %}
  </div>
</div>
<div class="caption">
  Poster presented at ASE 2026. <a href="{{ '/assets/pdf/ase26-flakefighters-poster.pdf' | relative_url }}">Download the poster (PDF)</a>.
</div>
