import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  init() {
    this._super(...arguments);
    this.set('task.isEditable', false);
    this.oldTitle = null
  },

  actions: {
    toggleDoneState() {
      this.get('task').set('isDone', !this.get('task').get('isDone'));
    },

    edit() {
      this.oldTitle = this.get('task.title');
      this.get('task').set('isEditable', true);
    },

    update() {
      this.get('task').set('isEditable', false);
      this.oldTitle = null;
    },

    cancel() {
      this.get('task').set('isEditable', false);
      this.get('task').set('title', this.oldTitle);
      this.oldTitle = null;
    },

    moveTaskUp() { this.moveTaskUp(this.get('task')) },
    moveTaskDown() { this.moveTaskDown(this.get('task')) },
    removeTask() { this.removeTask(this.get('task')) }
  }
});
