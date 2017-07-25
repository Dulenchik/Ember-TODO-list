export default function() {
  this.namespace = '/api';

  this.get('/projects', function() {
    return {
      data: [{
        type: 'projects',
        id: 43,
        attributes: { title: 'Lorem Ipsum' },
        relationships: {
          tasks: {
            data: [
              { type: 'task', id: 58 },
              { type: 'task', id: 66 },
              { type: 'task', id: 72 }
            ]
          }
        }
      }, {
        type: 'projects',
        id: 13,
        attributes: { title: 'Dolor Sit Amen' },
        relationships: {
          tasks: {
            data: [ { type: 'task', id: 67 } ]
          }
        }
      }, {
        type: 'projects',
        id: 7,
        attributes: { title: 'Carum Zen Borrow' },
        relationships: {
          tasks: {
            data: []
          }
        }
      }],
      included: [{
        type: 'task',
        id: 67,
        attributes: {
          title: 'Learn Ember!',
          position: 0,
          'is-done': true
        }
      }, {
        type: 'task',
        id: 66,
        attributes: {
          title: 'My task 1',
          position: 1,
          'is-done': true
        }
      }, {
        type: 'task',
        id: 72,
        attributes: {
          title: 'Buy bread',
          position: 0,
          'is-done': false
        }
      }, {
        type: 'task',
        id: 58,
        attributes: {
          title: 'My task 2',
          position: 2,
          'is-done': false
        }
      }]
    }
  }),

  this.delete('/projects/:id', function() {

  }),

  this.delete('/tasks/:id', function() {

  })
}
