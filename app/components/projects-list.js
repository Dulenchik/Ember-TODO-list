import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.newProject = { title: 'New Project', tasks: [] };
  },

  actions: {
    addProject() {
      this.get('store').createRecord('project', Ember.copy(this.newProject));
    },

    removeProject(project) {
      project.destroyRecord();
    }
  }
});
