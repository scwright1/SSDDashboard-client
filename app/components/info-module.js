import Ember from 'ember';

export default Ember.Component.extend({
    hasTitle: function() {
        return this.get('type') !== 'macro';
    }.property('title')
});
