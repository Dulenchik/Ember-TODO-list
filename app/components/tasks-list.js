import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.newTask = { title: '', isDone: false, project: this.get('project') };
  },

  sortedTasks: Ember.computed.sort('tasks', 'sortDefinition'),
  sortDefinition: ['position:asc'],

  actions: {
    addTask() {
      if (!this.newTask.title.length) return;

      let task = Ember.copy(this.newTask);
      Ember.set(task, 'position', this.get('tasks.length'));
      this.get('store').createRecord('task', task);
      Ember.set(this.newTask, 'title', '');
      this.reorderTasks();
    },

    removeTask(task) {
      self = this;
      task.destroyRecord().then(function() {
        self.reorderTasks();
      });
    },

    moveTaskUp(task) {
      if (task.get('position') <= 0) return;

      this.get('sortedTasks').removeObject(task);
      this.get('sortedTasks').insertAt(task.get('position') - 1, task);
      this.reorderTasks()
    },

    moveTaskDown(task) {
      if (task.get('position') === this.get('sortedTasks.length') - 1) return;

      this.get('sortedTasks').removeObject(task);
      this.get('sortedTasks').insertAt(task.get('position') + 1, task);
      this.reorderTasks()
    }
  },

  reorderTasks() {
    console.log(this.get('sortedTasks'));
    this.get('sortedTasks').forEach(
      function(item, index) {
        item.set('position', index);
      }
    );
  }
});
