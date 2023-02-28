migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7vnin343",
    "name": "keterangan",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "8vjyfbe2kxun3ks",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("7vnin343")

  return dao.saveCollection(collection)
})