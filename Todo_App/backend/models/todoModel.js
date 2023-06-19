const mongoose = require('mongoose')
const schema = mongoose.Schema

const todoSchema = new schema({
    task: {
        type: String,
        require: [true, 'task is required']
    },
    date: { type: Date}
});

todoSchema.pre('save', function(next) {
    if (this.isNew) {
      const date = new Date();
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      this.date = date.toLocaleDateString('en-US', options);
    }
    next();
  });


const Todo = mongoose.model( 'todo' , todoSchema)
module.exports=Todo;