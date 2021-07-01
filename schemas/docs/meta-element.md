
# Meta element

```
https://www.adplogger.no/json-schema/meta-element
```

Base for all spatial log objects. This is linked to schemas at http://schema.org/ and properties used in this type gets its semantic meaning from vocabularies at schema.org and/or www.adplogger.no/vocabularies

Extends: [Common](./common.md)

## Properties

Name | Type | Required | Description
---- | ---- | -------- | -----------
[schemaName](#schemaName) | string | required | undefined
[payload](#payload) | object | required | Payload of the adplogger object

## Example

```json
{
  "domainBrowserId": "681dfce1-8867-4a0b-b758-c80f5f5f3363",
  "domainVisitId": "93af7655-48ca-4444-9fea-8d875ffffc92",
  "pageUrl": "https://www.hadeland.no/",
  "pageViewId": "5404f76c-2472-42f8-a3b3-7a2231eaf812",
  "schemaName": "meta-element",
  "payload": {
    "id": "a3dfbcab-c345-42dc-8ee9-9f6d2732b452",
    "position": 0,
    "type": "MyElement",
    "adpType": "type-2",
    "parent": "5404f76c-2472-42f8-a3b3-7a2231eaf812",
    "cssSelector": "body"
  }
}
```

```json
{
  "domainBrowserId": "681dfce1-8867-4a0b-b758-c80f5f5f3363",
  "domainVisitId": "93af7655-48ca-4444-9fea-8d875ffffc92",
  "pageUrl": "https://www.hadeland.no/",
  "pageViewId": "5404f76c-2472-42f8-a3b3-7a2231eaf812",
  "schemaName": "meta-element",
  "payload": {
    "id": "a3dfbcab-c345-42dc-8ee9-9f6d2732b452"
  }
}
```





### schemaName

- Type: string
- is required
- Deafult: `meta-element`


### payload

Payload of the adplogger object

Name | Type | Required | Description
---- | ---- | -------- | -----------
[id](#id) | string | required | The identifier property represents any kind of identifier. It must be unique across page views for the same meta element. For instance if a teaser is used on two pages, this id should be the same. If multiple instances of the same meta element is present on the page, you should use the position property to indicate sequence.
[position](#position) | integer | optional | Sequence number, if more than one meta element with the same identifier is present on the page
[type](#type) | string | optional | Used to set the data type of the meta element. If the data type is described in the context of schema.org, only the type name is required. If the type is described in adplogger vocabularies the whole url must be used.
[adpType](#adpType) | string | optional | An additional type for the item. Here we can use our own names for the item. E.g teaser, privacy box, aid user
[parent](#parent) | string | optional | Reference to the parent meta element identifier
[cssSelector](#cssSelector) | string | optional | A css selector that identifies this element position in the DOM- Type: object
- is required


payload has the following properties:


`id`

The identifier property represents any kind of identifier. It must be unique across page views for the same meta element. For instance if a teaser is used on two pages, this id should be the same. If multiple instances of the same meta element is present on the page, you should use the position property to indicate sequence.

- Type: string
- is required
- Pattern: `/^[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}$/`

`position`

Sequence number, if more than one meta element with the same identifier is present on the page

- Type: integer
- is optional

`type`

Used to set the data type of the meta element. If the data type is described in the context of schema.org, only the type name is required. If the type is described in adplogger vocabularies the whole url must be used.

- Type: string
- is optional
- Deafult: `WebPageElement`

`adpType`

An additional type for the item. Here we can use our own names for the item. E.g teaser, privacy box, aid user

- Type: string
- is optional

`parent`

Reference to the parent meta element identifier

- Type: string
- is optional
- Pattern: `/^[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}$/`

`cssSelector`

A css selector that identifies this element position in the DOM

- Type: string
- is optional

