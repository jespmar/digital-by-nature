export default {
    name: "navLink",
    type: "object",
    title: "Author reference",
    fields: [
      {
        name: "displayName",
        type: "string",
        title: "Display Name"
      },
      {
        name: "route",
        type: "string",
        title: "Route"
      },
    ],
    preview: {
      select: {
        title: "displayName",
      },
    },
  };