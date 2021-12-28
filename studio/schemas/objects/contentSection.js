export default {
    name: "contentSection",
    type: "object",
    title: "Content Section",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
        description: "Titles should be catchy, descriptive, and not too long",
      },
      {
        name: "mainImage",
        type: "mainImage",
        title: "Main image",
      },

      {
        name: "body",
        type: "bodyPortableText",
        title: "Body",
      },
    ],
    preview: {
      select: {
        title: "title",
        media: "mainImage",
      },
    },
  };
  