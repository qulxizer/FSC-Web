/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_339990856")

  // update field
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

  // update field
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

  // update field
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

  // update field
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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_339990856")

  // update field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "number2212294583",
    "max": null,
    "min": null,
    "name": "1",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number450215437",
    "max": null,
    "min": null,
    "name": "2",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number1842515611",
    "max": null,
    "min": null,
    "name": "3",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number4088798008",
    "max": null,
    "min": null,
    "name": "4",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
