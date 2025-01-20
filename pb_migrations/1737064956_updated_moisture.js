/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_339990856")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number2918445923",
    "max": null,
    "min": null,
    "name": "value",
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
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number2918445923",
    "max": null,
    "min": null,
    "name": "data",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
