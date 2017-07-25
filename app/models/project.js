import DS from 'ember-data';

export default DS.Model.extend({
  tasks: DS.hasMany('tasks'),

  title: DS.attr('string')
});
