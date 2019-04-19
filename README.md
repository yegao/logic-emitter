npm install -S logic-emitter

```javascript
const { hit,target } = require('logic-emitter') 
const Harry = {
  name: 'Harry',
  age: 23,
  wife:{
    name: 'Marry',
    age: 20,
    son:{
      name: 'Heey',
      age: 3
    }
  },
  son:{
    name: 'Heey',
    age: 3
  }
}
console.log(
    hit(Harry,'wife','name'), // true
    hit(Harry,'son','name'), // true
    hit(Harry,'son','wife'), // false
    hit(Harry,'son','wife','name'), // false
    target(Harry,'son','name'), // 'Heey'
    target(Harry,'wife','name'), // 'Marry'
)
```

It is terrible do the logical in a long attribute chain

```javascript
if(Harry && Harry.son && Harry.son.name) {
	console.log(Harry.son.name)
}
```

You can do it like this

```javascript
if(hit(Harry,'son','name')) {
  console.log(Harry.son.name)
}
```

or

```javascript
console.log(target(Harry,'son','name'))
```



