fetch("/search.json")
  .then(r => r.json())
  .then(data => {

    const fuse = new Fuse(data, {
      includeScore: true,

      threshold: 0.35,

      keys: [
        { name: "title", weight: 4 },
        { name: "aliases", weight: 3 },
        { name: "keywords", weight: 3 },
        { name: "tags", weight: 2 },
        { name: "content", weight: 1 }
      ]
    });

    window.siteSearch = function(query) {
      return fuse.search(query);
    };

  });
