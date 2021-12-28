export default {
    name: "pages",
    type: "document",
    title: "Pages",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
      },
      {
        name: "route",
        type: "string",
        title: "Route",
        description: "the page route",
      },

      {
        title: 'Sections',
        name: 'sections',
        type: 'array',
        of: [{type: 'contentSection'}]
      },
      

    ],
  };