export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f68ad289c53d60e758fa8a1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-uk1bgbdg',
                  apiId: '44a0c0da-7d8c-456f-b715-22c2f2bcb2be'
                },
                {
                  buildHookId: '5f68ad285558b61012143d98',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-trbsww4f',
                  apiId: '94e5007c-6c54-4796-87fa-7a1b5df1a487'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JulesPatry/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-trbsww4f.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
