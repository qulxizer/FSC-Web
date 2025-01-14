/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_339990856")

  // remove field
  collection.fields.removeById("number2212294583")

  // remove field
  collection.fields.removeById("number450215437")

  // remove field
  collection.fields.removeById("number1842515611")

  // remove field
  collection.fields.removeById("number4088798008")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "json3503553168",
    "maxSize": 0,
    "name": "sensors",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_339990856")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "number2212294583",
    "max": null,
    "min": null,
    "name": "first",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number450215437",
    "max": null,
    "min": null,
    "name": "second",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number1842515611",
    "max": null,
    "min": null,
    "name": "third",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number4088798008",
    "max": null,
    "min": null,
    "name": "forth",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // remove field
  collection.fields.removeById("json3503553168")

  return app.save(collection)
})
