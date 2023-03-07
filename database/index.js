const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  repoId: Number,
  repoName: String,
  repoDescription: String,
  OwnerName: String,
  OwnerID: Number,
  starCount: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = () => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  document.save()
    .then((savedDoc) => {
      console.log(`the document ${savedDoc} has been saved`);
    })
    .catch(() => {
      console.log('there has been an error saving the document');
    })
}

module.exports.save = save;