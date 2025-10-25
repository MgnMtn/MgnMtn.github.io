// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-enjoyed-our-time-in-flagstaff-arizona-at-icsme-2024-presenting-our-papers-exploring-pseudo-testedness-empirically-evaluating-extreme-mutation-testing-at-the-statement-level-and-pseudosweep-a-pseudo-tested-code-identifier",
          title: 'Enjoyed our time in Flagstaff, Arizona at ICSME 2024 presenting our papers “...',
          description: "",
          section: "News",},{id: "news-excited-to-have-our-paper-where-tests-fall-short-empirically-analyzing-oracle-gaps-in-covered-code-accepted-at-esem-2025",
          title: 'Excited to have our paper “Where Tests Fall Short: Empirically Analyzing Oracle Gaps...',
          description: "",
          section: "News",},{id: "news-had-a-great-time-at-esem-2025-both-as-a-student-volunteer-and-presenting-our-paper-where-tests-fall-short-empirically-analyzing-oracle-gaps-in-covered-code",
          title: 'Had a great time at ESEM 2025 both as a student volunteer and...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%65%6D%61%74%6F%6E%31@%73%68%65%66%66%69%65%6C%64.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mgnmtn# your GitHub user name", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mgnmtn", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0005-8817-4279", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=jd2Tjl4AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
