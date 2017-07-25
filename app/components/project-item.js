import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['panel'],
  classNameBindings: ['isCompleted:panel-success:panel-primary'],

  tasks: Ember.computed('project.tasks', function() {
    return this.get('project.tasks');
  }),

  totalTasksCount: Ember.computed('tasks.length', function() {
    return this.get('tasks.length');
  }),

  completedTasksCount: Ember.computed('tasks.@each.isDone', function() {
    return this.get('tasks').filterBy('isDone').length;
  }),

  isCompleted: Ember.computed('totalTasksCount', 'completedTasksCount', function() {
    if (this.get('totalTasksCount') === 0) return false;
    return this.get('totalTasksCount') === this.get('completedTasksCount');
  }),

  init() {
    this._super(...arguments);
    this.set('project.isEditable', false);
    this.oldTitle = null
  },

  actions: {
    edit() {
      this.oldTitle = this.get('project.title');
      this.get('project').set('isEditable', true);
    },

    update() {
      this.get('project').set('isEditable', false);
      this.oldTitle = null;
    },

    cancel() {
      this.get('project').set('isEditable', false);
      this.get('project').set('title', this.oldTitle);
      this.oldTitle = null;
    },

    removeProject() { this.removeProject(this.get('project')); }
  }
});
