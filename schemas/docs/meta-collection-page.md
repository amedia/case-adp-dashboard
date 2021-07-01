
# CollectionPage

```
https://www.adplogger.no/json-schema/meta-collection-page
```

Packaging of content

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
  "pageUrl": "https://www.hadeland.no/bildeserie/brandbu/naringsliv/fra-arkivet-mann-av-huse-da-banken-apnet-nybygg-i-brandbu-i-1987/g/5-21-673326",
  "pageViewId": "5404f76c-2472-42f8-a3b3-7a2231eaf812",
  "schemaName": "meta-collection-page",
  "payload": {
    "id": "f8174898-1097-43d1-83de-61e36ed5c980",
    "position": 0,
    "type": "ImageGallery",
    "adpType": "ad",
    "parent": "69a0ecf1-8075-40a4-b7f5-695b2a651eab",
    "cssSelector": "body > div.album-overlay > amedia-album",
    "contentId": "5-21-673326",
    "title": "FRA ARKIVET: Mann av huse da banken åpnet nybygg i Brandbu i 1987"
  }
}
```

```json
{
  "domainBrowserId": "681dfce1-8867-4a0b-b758-c80f5f5f3363",
  "domainVisitId": "93af7655-48ca-4444-9fea-8d875ffffc92",
  "pageUrl": "https://www.hadeland.no/bildeserie/brandbu/naringsliv/fra-arkivet-mann-av-huse-da-banken-apnet-nybygg-i-brandbu-i-1987/g/5-21-673326",
  "pageViewId": "5404f76c-2472-42f8-a3b3-7a2231eaf812",
  "schemaName": "meta-collection-page",
  "payload": {
    "id": "f8174898-1097-43d1-83de-61e36ed5c980",
    "title": "FRA ARKIVET: Mann av huse da banken åpnet nybygg i Brandbu i 1987"
  }
}
```





### schemaName

- Type: string
- is optional
- Deafult: `meta-collection-page`
- Allowed values: meta-collection-page


### payload

Name | Type | Required | Description
---- | ---- | -------- | -----------
[type](#type) | string | optional | Used to set the data type of the meta element. If the data type is described in the context of schema.org, only the type name is required. If the type is described in adplogger vocabularies the whole url must be used.
[adpType](#adpType) | string | optional | Type of Amedia product
[contentId](#contentId) | string | optional | Content Source/Content Id
[acpId](#acpId) | string | optional | Amedia Content Platform Id (to be removed)
[title](#title) | string | required | Name of the collection- Type: object
- is required


payload has the following properties:


`type`

Used to set the data type of the meta element. If the data type is described in the context of schema.org, only the type name is required. If the type is described in adplogger vocabularies the whole url must be used.

- Type: string
- is optional
- Deafult: `CollectionPage`
- Allowed values: CollectionPage, ImageGallery, VideoGallery

`adpType`

Type of Amedia product

- Type: string
- is optional

`contentId`

Content Source/Content Id

- Type: string
- is optional

`acpId`

Amedia Content Platform Id (to be removed)

- Type: string
- is optional
- Pattern: `/\d+-\d+-\d+/`

`title`

Name of the collection

- Type: string
- is required

