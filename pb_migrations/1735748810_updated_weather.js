/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3716394116")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number1778153410",
    "max": null,
    "min": null,
    "name": "humidity",
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
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number1778153410",
    "max": null,
    "min": null,
    "name": "humidity",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
