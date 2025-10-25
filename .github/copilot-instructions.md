# AI Agent Instructions for MgnMtn.github.io

This is a Jekyll-based academic portfolio website using the al-folio theme. Here's what you need to know to help maintain and enhance it effectively.

## Project Architecture

### Core Components

- **Jekyll Site Structure**
  - `_config.yml`: Main configuration file for site settings, theme options, and metadata
  - `_layouts/`: Page templates (about, cv, post, etc.)
  - `_includes/`: Reusable components and partials
  - `_sass/`: SCSS styling organized by component
  - `assets/`: Static files (images, js, css)

### Key Data Sources

- `_bibliography/papers.bib`: Academic publications in BibTeX format
- `_data/*.yml`: Structured data for CV, repositories, and social links
- `assets/json/resume.json`: Optional JSONResume format CV (preferred over `_data/cv.yml`)

## Development Workflows

### Local Development

```bash
bundle exec jekyll serve  # Start local server
```

- Changes to `_config.yml` require server restart
- Other file changes auto-reload

### Content Management Patterns

1. **Blog Posts**: Add Markdown files to `_posts/` with format `YYYY-MM-DD-title.md`
2. **Publications**: Update `papers.bib` using BibTeX entries
3. **News Items**: Add to `_news/` with date-based filenames
4. **Projects**: Create files in `_projects/` with proper front matter

## Project-Specific Conventions

### Front Matter

```yaml
---
layout: [page|post|about|cv] # Required
title: "Page Title" # Required
permalink: /custom-url/ # Optional
---
```

### Key Directories to Watch

- `_bibliography/`: Research publications
- `_news/`: Time-sensitive updates
- `_pages/`: Core website pages
- `_posts/`: Blog entries
- `_projects/`: Portfolio items

### Theme Customization

- Color schemes and variables in `_sass/_themes.scss`
- Layout modifications in `_sass/_layout.scss`
- Base styles in `_sass/_base.scss`

## Common Tasks

### Adding New Content

1. **Blog Post**:

   ```markdown
   ---
   layout: post
   title: Post Title
   date: YYYY-MM-DD
   ---
   ```

2. **Publication**:

   ```bibtex
   @article{key,
     title={},
     author={},
     journal={},
     year={}
   }
   ```

3. **News Item**:
   ```markdown
   ---
   layout: post
   date: YYYY-MM-DD
   inline: true
   ---
   ```

### Troubleshooting

- Check Jekyll build output for compilation errors
- Verify front matter formatting in new content
- Ensure BibTeX entries are properly formatted

Would you like me to expand on any of these sections or add additional project-specific details I may have missed?
