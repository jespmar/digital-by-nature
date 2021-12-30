export default {
    name: "header",
    type: "object",
    title: "Header",
    fields: [
      {
        name: "description",
        type: "string",
        title: "Description"
      },
      {
        name: "headerText",
        type: "string",
        title: "Header Text"
      },
    ],
    preview: {
      select: {
        title: "headerText",
        subtitle: "description"
      },
    },
  };