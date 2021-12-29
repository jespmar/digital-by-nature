

const slugify = input => input
.toLowerCase()
.replace(/\s+/g, '-')
.slice(0, 200)

const makeRoute = async (input, type) => {

    const slug = slugify(input)
    return `/${slug}`

}

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
        type: "slug",
        title: "Route",
        description:
          "The page route",
        options: {
          source: "title",
          maxLength: 96,
          slugify: makeRoute
        },
      },
      {
        title: 'Sections',
        name: 'sections',
        type: 'array',
        of: [{type: 'contentSection'},{type: 'category'}]
      },
      

    ],
  };