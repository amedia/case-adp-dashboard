
# WPAdBlock

```
https://www.adplogger.no/json-schema/meta-ad
```

A web page ad block.

Extends: [Meta element](./meta-element.md)

## Properties

Name | Type | Required | Description
---- | ---- | -------- | -----------
[schemaName](#schemaName) | string | optional | undefined
[payload](#payload) | object | required | undefined

## Example

```json
{
  "domainBrowserId": "681dfce1-8867-4a0b-b758-c80f5f5f3363",
  "domainVisitId": "93af7655-48ca-4444-9fea-8d875ffffc92",
  "pageUrl": "https://www.hadeland.no",
  "pageViewId": "5404f76c-2472-42f8-a3b3-7a2231eaf812",
  "schemaName": "meta-ad",
  "payload": {
    "id": "f8174898-1097-43d1-83de-61e36ed5c980",
    "position": 0,
    "type": "WPAdBlock",
    "adpType": "ad",
    "parent": "69a0ecf1-8075-40a4-b7f5-695b2a651eab",
    "cssSelector": "#midtbanner-1",
    "name": "midtbanner",
    "unit": "67410776",
    "lineItem": "1018520456",
    "advertiser": "BUD Redningsselskapet",
    "creative": "138242702988"
  }
}
```

```json
{
  "domainBrowserId": "681dfce1-8867-4a0b-b758-c80f5f5f3363",
  "domainVisitId": "93af7655-48ca-4444-9fea-8d875ffffc92",
  "pageUrl": "https://www.hadeland.no",
  "pageViewId": "5404f76c-2472-42f8-a3b3-7a2231eaf812",
  "schemaName": "meta-ad",
  "payload": {
    "id": "f8174898-1097-43d1-83de-61e36ed5c980",
    "name": "midtbanner",
    "unit": "67410776",
    "lineItem": "1018520456",
    "advertiser": "BUD Redningsselskapet",
    "creative": "138242702988"
  }
}
```





### schemaName

- Type: string
- is optional
- Deafult: `meta-ad`
- Allowed values: meta-ad


### payload

Name | Type | Required | Description
---- | ---- | -------- | -----------
[type](#type) | string | optional | Used to set the data type of the meta element. If the data type is described in the context of schema.org, only the type name is required. If the type is described in adplogger vocabularies the whole url must be used.
[adpType](#adpType) | string | optional | An additional type for the item. Here we can use our own names for the item. E.g teaser, privacy box, aid user
[name](#name) | string | required | Amedia's position name
[position](#position) | integer | optional | Sequence number, if adPosition is not unique per page
[unit](#unit) | string | required | DFP Ad Unit Id
[lineItem](#lineItem) | string | required | DFP Line Item Id
[advertiser](#advertiser) | string | required | DFP Advertiser Id
[creative](#creative) | string | required | DFP Creative Id- Type: object
- is required


payload has the following properties:


`type`

Used to set the data type of the meta element. If the data type is described in the context of schema.org, only the type name is required. If the type is described in adplogger vocabularies the whole url must be used.

- Type: string
- is optional
- Deafult: `WPAdBlock`
- Allowed values: WPAdBlock

`adpType`

An additional type for the item. Here we can use our own names for the item. E.g teaser, privacy box, aid user

- Type: string
- is optional
- Deafult: `ad`
- Allowed values: ad

`name`

Amedia's position name

- Type: string
- is required

`position`

Sequence number, if adPosition is not unique per page

- Type: integer
- is optional

`unit`

DFP Ad Unit Id

- Type: string
- is required

`lineItem`

DFP Line Item Id

- Type: string
- is required

`advertiser`

DFP Advertiser Id

- Type: string
- is required

`creative`

DFP Creative Id

- Type: string
- is required

