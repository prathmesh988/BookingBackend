module.exports = (mongoose) => {
  mongoose.connect('mongodb+srv://prathmeshgawade41:h8kEaXc7WFXh84q5@main.9hzwqu7.mongodb.net/events/event', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
  }).then(() => {
    console.log('Connected to MongoDB...');
  }).catch(err => {
    console.error('Could not connect to MongoDB...', err);
  });
};
