export default {
    name: "navigation",
    type: "document",
    title: "Navigation",
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Menu Title',
            initialValue: 'Main Menu',
            hidden: true
        },

        {
            title: 'Links',
            name: 'navLinks',
            type: 'array',
            of: [{type: 'navLink'}]
          },
    ],
    preview: {
        select: {
          title: "title",
        },
      },
  };