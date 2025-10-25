// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-enjoyed-our-time-in-flagstaff-arizona-at-icsme-2024-presenting-our-papers-exploring-pseudo-testedness-empirically-evaluating-extreme-mutation-testing-at-the-statement-level-and-pseudosweep-a-pseudo-tested-code-identifier",
          title: '🇺🇸 Enjoyed our time in Flagstaff, Arizona at ICSME 2024 presenting our papers...',
          description: "",
          section: "News",},{id: "news-excited-to-have-our-paper-where-tests-fall-short-empirically-analyzing-oracle-gaps-in-covered-code-accepted-at-esem-2025",
          title: '✅ Excited to have our paper “Where Tests Fall Short: Empirically Analyzing Oracle...',
          description: "",
          section: "News",},{id: "news-had-a-great-time-at-esem-2025-in-honolulu-hawaii-as-a-student-volunteer-and-presenting-our-paper-where-tests-fall-short-empirically-analyzing-oracle-gaps-in-covered-code",
          title: '🇺🇸 Had a great time at ESEM 2025 in Honolulu, Hawaii, as a...',
          description: "",
          section: "News",},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mgnmtn", "_blank");
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
      },];
