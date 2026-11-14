---
layout: page
title: Software
permalink: /software/
description: Software from my research and interests
nav: true
nav_order: 3
github_user: MgnMtn
contribution_badges:
  RoguePenguin06/PlateRace: hackathon
# Extra links for a contribution card, keyed by owner/repo.
contribution_links:
  RoguePenguin06/PlateRace:
    - name: Devpost
      url: https://devpost.com/software/wip-jg3vpe
---

<!-- pages/projects.md -->

<div class="projects">
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_repo.liquid %}
    {% endfor %}
  </div>

  <h2 id="contributions" class="repo-section-title">Contributions</h2>
  <p class="repo-section-note">
    Other repositories where my pull requests have been merged.
  </p>
  <div
    id="repo-contributions"
    class="row row-cols-1 row-cols-md-2"
    data-user="{{ page.github_user }}"
    data-badges="{{ page.contribution_badges | jsonify | escape }}"
    data-links="{{ page.contribution_links | jsonify | escape }}"
    data-exclude="{% for p in site.projects %}{% if p.github %}{{ p.github | downcase }} {% endif %}{% endfor %}{% for pkg in site.data.replication_packages %}{{ pkg.github | downcase }} {% endfor %}"
  >
    <div class="col repo-empty">Loading contributions from GitHub…</div>
  </div>

  <h2 id="replication-packages" class="repo-section-title">Replication packages</h2>
  <p class="repo-section-note">
    Code and data to reproduce the results in my papers.
  </p>
  <div class="row row-cols-1 row-cols-md-2">
    {% for pkg in site.data.replication_packages %}
      {% include replication_repo.liquid %}
    {% endfor %}
  </div>
</div>

<script>
  (function () {
    // Live star/fork counts for repository cards with `github: owner/repo` set.
    document.querySelectorAll(".repo-card[data-repo]").forEach(function (card) {
      fetch("https://api.github.com/repos/" + card.dataset.repo)
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (d) {
          if (!d) return;
          [["stars", d.stargazers_count], ["forks", d.forks_count]].forEach(function (pair) {
            var el = card.querySelector(".repo-" + pair[0]);
            if (el && pair[1] > 0) { el.querySelector(".count").textContent = pair[1]; el.hidden = false; }
          });
        })
        .catch(function () {});
    });
    // Contributions: repos (other than the ones above) with merged pull requests by this user.
    var box = document.getElementById("repo-contributions");
    var user = box.dataset.user;
    var exclude = box.dataset.exclude.split(" ").filter(Boolean);
    var badges = {};
    try { badges = JSON.parse(box.dataset.badges) || {}; } catch (e) {}
    var links = {};
    try { links = JSON.parse(box.dataset.links) || {}; } catch (e) {}
    var linkIcon = '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path></svg>';
    var allPrsUrl = "https://github.com/pulls?q=is%3Apr+is%3Amerged+author%3A" + user;
    var langColors = { Python: "#3572A5", Java: "#b07219", JavaScript: "#f1e05a", TypeScript: "#3178c6", C: "#555555", "C++": "#f34b7d", Rust: "#dea584", Go: "#00ADD8", Kotlin: "#A97BFF", R: "#198CE7", Shell: "#89e051", HTML: "#e34c26", TeX: "#3D6117", "Jupyter Notebook": "#DA5B0B" };
    var repoIcon = '<svg class="repo-icon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path></svg>';
    var prIcon = '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .001Z"></path></svg>';
    var starIcon = '<svg viewBox="0 0 16 16" width="16" height="16" aria-label="stars"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path></svg>';
    function esc(s) {
      var d = document.createElement("div");
      d.textContent = s == null ? "" : String(s);
      return d.innerHTML;
    }
    function message(html) {
      box.innerHTML = '<div class="col repo-empty">' + html + "</div>";
    }
    fetch("https://api.github.com/search/issues?per_page=100&q=" + encodeURIComponent("type:pr is:merged author:" + user))
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (data) {
        var repos = {};
        data.items.forEach(function (pr) {
          var name = pr.repository_url.split("/repos/")[1];
          if (exclude.indexOf(name.toLowerCase()) !== -1) return;
          repos[name] = (repos[name] || 0) + 1;
        });
        var names = Object.keys(repos).sort(function (a, b) { return repos[b] - repos[a]; });
        if (!names.length) { message("No merged pull requests to other repositories yet."); return; }
        return Promise.all(names.map(function (name) {
          return fetch("https://api.github.com/repos/" + name)
            .then(function (r) { return r.ok ? r.json() : {}; })
            .catch(function () { return {}; })
            .then(function (info) { return { name: name, count: repos[name], info: info }; });
        })).then(function (list) {
          box.innerHTML = list.map(function (c) {
            var i = c.info, lang = i.language;
            var prsUrl = "https://github.com/" + c.name + "/pulls?q=is%3Apr+is%3Amerged+author%3A" + user;
            return '<div class="col"><div class="repo-card h-100">' +
              '<div class="repo-card-header">' + repoIcon +
              '<a class="repo-name" href="https://github.com/' + esc(c.name) + '">' + esc(c.name) + "</a>" +
              '<span class="repo-badge">' + esc(badges[c.name] || "contribution") + "</span></div>" +
              (i.description ? '<p class="repo-desc">' + esc(i.description) + "</p>" : '<p class="repo-desc"></p>') +
              '<div class="repo-meta">' +
              (lang ? '<span class="repo-meta-item"><span class="repo-lang-dot" style="background-color:' + (langColors[lang] || "#8b949e") + '"></span>' + esc(lang) + "</span>" : "") +
              (i.stargazers_count > 0 ? '<span class="repo-meta-item repo-stars">' + starIcon + '<span class="count">' + i.stargazers_count + "</span></span>" : "") +
              '<a class="repo-meta-item" href="' + prsUrl + '">' + prIcon + c.count + " merged pull request" + (c.count === 1 ? "" : "s") + "</a>" +
              (links[c.name] || []).map(function (l) {
                return '<a class="repo-meta-item" href="' + esc(l.url) + '">' + linkIcon + esc(l.name) + "</a>";
              }).join("") +
              "</div></div></div>";
          }).join("");
        });
      })
      .catch(function () {
        message('Couldn’t load contributions from GitHub right now. <a href="' + allPrsUrl + '">See my merged pull requests on GitHub</a>.');
      });
  })();
</script>
