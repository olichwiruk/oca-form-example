const schemaBase = {
  "@context": "https://odca.tech/v1",
  "type": "spec/schema_base/1.0",
  "name": "Test",
  "description": "",
  "issued_by": "",
  "classification": "",
  "pii_attributes": [
    "name"
  ],
  "attributes": {
    "name": "Text"
  }
}

const overlays = [
  {
    "@context": "https://odca.tech/overlays/v1",
    "type": "spec/overlay/label/1.0",
    "issued_by": "",
    "role": "",
    "purpose": "",
    "schema_base": "hl:9Rmt1B7apZBPa4xJKDkz8qByyp8Lao9m3hLoJJyenSo",
    "language": "pl_PL",
    "attr_labels": {
      "name": "Imię"
    },
    "attr_categories": [
      "_cat-1_"
    ],
    "cat_labels": {
      "_cat-1_": "kategoria"
    },
    "cat_attributes": {
      "_cat-1_": [
        "name"
      ]
    }
  },
  {
    "@context": "https://odca.tech/overlays/v1",
    "type": "spec/overlay/label/1.0",
    "issued_by": "",
    "role": "",
    "purpose": "",
    "schema_base": "hl:9Rmt1B7apZBPa4xJKDkz8qByyp8Lao9m3hLoJJyenSo",
    "language": "en_US",
    "attr_labels": {
      "name": "Name"
    },
    "attr_categories": [
      "_cat-1_"
    ],
    "cat_labels": {
      "_cat-1_": "category"
    },
    "cat_attributes": {
      "_cat-1_": [
        "name"
      ]
    }
  },
  {
    "@context": "https://odca.tech/overlays/v1",
    "type": "spec/overlay/character_encoding/1.0",
    "issued_by": "",
    "role": "",
    "purpose": "",
    "schema_base": "hl:9Rmt1B7apZBPa4xJKDkz8qByyp8Lao9m3hLoJJyenSo",
    "default_character_encoding": "utf-8",
    "attr_character_encoding": {
      "name": "utf-8"
    }
  }
]

export default {
  schemaBase, overlays
}
