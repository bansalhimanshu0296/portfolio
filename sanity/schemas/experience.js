export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [{
        name: 'jobTitle',
        title: 'JobTitle',
        type: 'string',
    },{
        name: 'orgImage',
        title: 'OrgImage',
        type: 'image',
        options:{hotspot: true}
    },{
        name: 'organization',
        title: 'Organization',
        type: 'string',
    },{
        name: 'dateStarted',
        title: 'DateStarted',
        type: 'date'
    },{
        name: 'dateEnded',
        title: 'DateEnded',
        type: 'date'
    },{
        name: 'isCurrentlyWorkingHere',
        title: 'IsCurrentlyWorkingHere',
        type: 'boolean'
    },{
        name: 'technologies',
        title: 'Techologies',
        type: 'array',
        of: [{type: 'reference', to: {type: 'skill'}}]
    },{
        name: 'points',
        title: 'Points',
        type: 'array',
        of: [{type: 'string'}]
    }]
}