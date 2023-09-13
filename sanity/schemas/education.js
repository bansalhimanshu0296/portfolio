export default {
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [{
          name: 'orgImage',
          title: 'OrgImage',
          type: 'image',
          options:{hotspot: true}
      },{
          name: 'organization',
          title: 'Organization',
          type: 'string',
      },{
          name: 'city',
          title: 'City',
          type: 'string'
      },{
        name: 'state',
        title: 'State',
        type: 'string'
    },{
        name: 'country',
        title: 'Country',
        type: 'string'
    },{
          name: 'dateStarted',
          title: 'DateStarted',
          type: 'date'
      },{
          name: 'dateEnded',
          title: 'DateEnded',
          type: 'date'
      },{
        name: 'cgpa',
        title: 'CGPA',
        type: 'string'
    }]
  }