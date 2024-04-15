/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "gk1junna4vlfsj0",
    "created": "2024-04-12 13:29:11.203Z",
    "updated": "2024-04-12 13:29:11.203Z",
    "name": "Test",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ptfrmqji",
        "name": "Title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "bj2xuotu",
        "name": "Content",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("gk1junna4vlfsj0");

  return dao.deleteCollection(collection);
})
