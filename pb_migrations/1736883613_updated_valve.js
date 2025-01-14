/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4246517020")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "bool2744374011",
    "name": "state",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4246517020")

  // remove field
  collection.fields.removeById("bool2744374011")

  return app.save(collection)
})
