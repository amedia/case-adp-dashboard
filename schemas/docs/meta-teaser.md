
# Teaser

```
https://www.adplogger.no/json-schema/meta-teaser
```

A teaser of some content

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
  "pageUrl": "https://www.ba.no",
  "pageViewId": "5404f76c-2472-42f8-a3b3-7a2231eaf812",
  "schemaName": "meta-teaser",
  "payload": {
    "id": "f8174898-1097-43d1-83de-61e36ed5c980",
    "position": 0,
    "type": "Article",
    "adpType": "teaser",
    "parent": "69a0ecf1-8075-40a4-b7f5-695b2a651eab",
    "cssSelector": "#art-5-8-1187628 > article",
    "variant": "a",
    "testId": "c59189344a",
    "title": "Finner ikke konkret svar på drikkevannsskandalen",
    "url": "https://www.ba.no/drikkevannskandalen/askoy/mattilsynet/mattilsynet-tror-fugler-og-dyr-er-opphavet-til-smitten-i-askoy-vannet/s/5-8-1187628"
  }
}
```

```json
{
  "domainBrowserId": "681dfce1-8867-4a0b-b758-c80f5f5f3363",
  "domainVisitId": "93af7655-48ca-4444-9fea-8d875ffffc92",
  "pageUrl": "https://www.ba.no",
  "pageViewId": "5404f76c-2472-42f8-a3b3-7a2231eaf812",
  "schemaName": "meta-teaser",
  "payload": {
    "id": "f8174898-1097-43d1-83de-61e36ed5c980",
    "url": "https://www.ba.no/drikkevannskandalen/askoy/mattilsynet/mattilsynet-tror-fugler-og-dyr-er-opphavet-til-smitten-i-askoy-vannet/s/5-8-1187628"
  }
}
```





### schemaName

- Type: string
- is optional
- Deafult: `meta-teaser`
- Allowed values: meta-teaser


### payload

Name | Type | Required | Description
---- | ---- | -------- | -----------
[type](#type) | string | optional | Used to set the data type of the meta element. If the data type is described in the context of schema.org, only the type name is required. If the type is described in adplogger vocabularies the whole url must be used.
[adpType](#adpType) | string | optional | An additional type for the item. Here we can use our own names for the item. E.g teaser, privacy box, aid user
[variant](#variant) | string | optional | Variant, if a/b testing (teaser testing) is performed
[testId](#testId) | string | optional | Id for test in dr. edition
[contentId](#contentId) | string | optional | Content Source/Content Id
[acpId](#acpId) | string | optional | Amedia Content Platform Id (to be removed)
[title](#title) | string | optional | Title, if appropriate
[url](#url) | string | required | The content url the teaser links to
[playerId](#playerId) | string | optional | Identifying player and/or videoid- Type: object
- is required


payload has the following properties:


`type`

Used to set the data type of the meta element. If the data type is described in the context of schema.org, only the type name is required. If the type is described in adplogger vocabularies the whole url must be used.

- Type: string
- is optional
- Deafult: `Article`
- Allowed values: Article, NewsArticle, AdvertiserContentArticle, OpinionNewsArticle, ReviewNewsArticle, VideoObject

`adpType`

An additional type for the item. Here we can use our own names for the item. E.g teaser, privacy box, aid user

- Type: string
- is optional
- Deafult: `teaser`
- Allowed values: teaser

`variant`

Variant, if a/b testing (teaser testing) is performed

- Type: string
- is optional

`testId`

Id for test in dr. edition

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

Title, if appropriate

- Type: string
- is optional

`url`

The content url the teaser links to

- Type: string
- is required

`playerId`

Identifying player and/or videoid

- Type: string
- is optional

