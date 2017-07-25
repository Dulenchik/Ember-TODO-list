import DS from 'ember-data';

export default DS.Model.extend({
  project: DS.belongsTo('project'),

  title: DS.attr('string'),
  position: DS.attr('number'),
  isDone: DS.attr('boolean')
});
