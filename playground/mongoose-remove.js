const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '5979591a95b421880c3efa14'}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('5979591595b421880c3efa13').then((todo) => {
  console.log(todo);
});
