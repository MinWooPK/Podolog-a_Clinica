import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'URL',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),

    defineField({
      name: 'publishedAt',
      title: 'Fecha',
      type: 'datetime',
    }),

    defineField({
      name: 'coverImage',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'excerpt',
      title: 'Resumen',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'content',
      title: 'Contenido',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
