ReactiveTemplates.onCreated('collections.comments.index', function() {

  this.subscribe('posts', {sort: {submitted: -1, _id: -1}, limit: 0});

});