
# External Embed

```
https://www.adplogger.no/json-schema/meta-external-embed
```

An element provided by an external entity.

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
  "schemaName": "meta-embed",
  "payload": {
    "id": "f8174898-1097-43d1-83de-61e36ed5c980",
    "position": 0,
    "type": "WebPageElement",
    "adpType": "smartembed",
    "parent": "69a0ecf1-8075-40a4-b7f5-695b2a651eab",
    "cssSelector": "#am-mainContent > article > header > div.am-article-headerImage > div > div > div",
    "url": "https://www.regnskapstall.no/widget/accounting/?id=986529551&graph=true&finance=true&roles=true&shareholders=true"
  }
}
```

```json
{
  "domainBrowserId": "681dfce1-8867-4a0b-b758-c80f5f5f3363",
  "domainVisitId": "93af7655-48ca-4444-9fea-8d875ffffc92",
  "pageUrl": "https://www.hadeland.no/bildeserie/brandbu/naringsliv/fra-arkivet-mann-av-huse-da-banken-apnet-nybygg-i-brandbu-i-1987/g/5-21-673326",
  "pageViewId": "5404f76c-2472-42f8-a3b3-7a2231eaf812",
  "schemaName": "meta-embed",
  "payload": {
    "id": "f8174898-1097-43d1-83de-61e36ed5c980",
    "url": "https://www.regnskapstall.no/widget/accounting/?id=986529551&graph=true&finance=true&roles=true&shareholders=true"
  }
}
```





### schemaName

- Type: string
- is optional
- Deafult: `meta-embed`
- Allowed values: meta-embed


### payload

Name | Type | Required | Description
---- | ---- | -------- | -----------
[adpType](#adpType) | string | optional | An additional type for the item. Here we can use our own names for the item. E.g teaser, privacy box, aid user
[url](#url) | string | required | The smartembed or manifest url used to include this content- Type: object
- is required


payload has the following properties:


`adpType`

An additional type for the item. Here we can use our own names for the item. E.g teaser, privacy box, aid user

- Type: string
- is optional
- Deafult: `smartembed`
- Allowed values: smartembed, component

`url`

The smartembed or manifest url used to include this content

- Type: string
- is required

