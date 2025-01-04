/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3716394116")

  // update field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "number190023114",
    "max": null,
    "min": null,
    "name": "temp",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3716394116")

  // update field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "number190023114",
    "max": null,
    "min": null,
    "name": "temp",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
