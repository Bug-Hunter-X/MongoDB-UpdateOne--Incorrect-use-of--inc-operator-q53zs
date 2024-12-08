```javascript
db.collection('users').updateOne({ name: 'John Doe' }, { $inc: { "age": 1 } });
```