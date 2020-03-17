export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e70dd076ca3087872211153',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-3kbnhgti',
                  apiId: 'd3cc7e5f-a84b-461a-b6c5-374aafa4e611'
                },
                {
                  buildHookId: '5e70dd07acf72696c6e06fde',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vua6mgd9',
                  apiId: '180716e1-618e-4579-8277-8f5e5eca66a6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mariacheline/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vua6mgd9.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
