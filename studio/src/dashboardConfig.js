export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6159fc5cbb69fced6548d9f8",
                  title: "Sanity Studio",
                  name: "digital-by-nature-studio",
                  apiId: "45acf94d-d32b-4bb6-bd59-c98509f23cc4",
                },
                {
                  buildHookId: "6159fc5cbb9417ca17d9e44f",
                  title: "Blog Website",
                  name: "digital-by-nature",
                  apiId: "ad966e5f-2904-4141-bafa-3bf1a23d8c4b",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jespmar/digital-by-nature",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://digital-by-nature.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
