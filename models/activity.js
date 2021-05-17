const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Currently we are not using any forms to build an activity so right now this schema is just here to allow us to push something to the database but is not actually constraining our data in any way. 
// TODO: Update activitySchema when starting the createActivity feature.

const activitySchema = new Schema(
  {
    name: { type: String, required: true },
    topic: String, 
    sections: [],
    isDraft: Boolean,
    archived: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Activity', activitySchema);
