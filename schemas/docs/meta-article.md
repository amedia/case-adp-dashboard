
# Article

```
https://www.adplogger.no/json-schema/meta-article
```

An article, such as a news article.

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
  "pageUrl": "https://www.hadeland.no/utgave/hadeland-hagen-saken/edition/5dba7de6f5ffdc1e4b9c1834/2/5-43-1175928",
  "pageViewId": "5404f76c-2472-42f8-a3b3-7a2231eaf812",
  "schemaName": "meta-article",
  "payload": {
    "id": "a3dfbcab-c345-42dc-8ee9-9f6d2732b452",
    "position": 0,
    "type": "NewsArticle",
    "adpType": "story",
    "parent": "de63d76d-2c31-41f3-818e-dfef1f246355",
    "cssSelector": "#art-5-21-673772",
    "contentId": "5-21-673772",
    "datePublished": "2019-12-01T12:10:07.000Z",
    "dateModified": "2019-12-01T13:04:18.000Z",
    "title": "De frivillige etterlyser økonomi, men det er ikke berørt i ny plan: – Hører ikke med her",
    "byline": "Anne Berit Reinsborg",
    "isPartOf": "https://www.hadeland.no/utgave/hadeland-hagen-saken/edition/5dba7de6f5ffdc1e4b9c1834",
    "pageStart": 3,
    "pageEnd": 3,
    "articleSection": "nyheter",
    "tags": "nyheter, frivillighet, lunner-kommunestyre, lunner-kommune",
    "isAccessibleForFree": false,
    "contentModel": "paywall",
    "presentationMode": "full"
  }
}
```

```json
{
  "domainBrowserId": "681dfce1-8867-4a0b-b758-c80f5f5f3363",
  "domainVisitId": "93af7655-48ca-4444-9fea-8d875ffffc92",
  "pageUrl": "https://www.hadeland.no/utgave/hadeland-hagen-saken/edition/5dba7de6f5ffdc1e4b9c1834/2/5-43-1175928",
  "pageViewId": "5404f76c-2472-42f8-a3b3-7a2231eaf812",
  "schemaName": "meta-article",
  "payload": {
    "id": "a3dfbcab-c345-42dc-8ee9-9f6d2732b452",
    "title": "De frivillige etterlyser økonomi, men det er ikke berørt i ny plan: – Hører ikke med her"
  }
}
```





### schemaName

- Type: string
- is optional
- Deafult: `meta-article`
- Allowed values: meta-article


### payload

Name | Type | Required | Description
---- | ---- | -------- | -----------
[type](#type) | string | optional | Used to set the data type of the meta element. If the data type is described in the context of schema.org, only the type name is required. If the type is described in adplogger vocabularies the whole url must be used.
[adpType](#adpType) | string | optional | Content type in our cms
[contentId](#contentId) | string | optional | Content Source/Content Id
[acpId](#acpId) | string | optional | Amedia Content Platform Id (to be removed)
[datePublished](#datePublished) | string | optional | Date of first broadcast/publication. A date value in ISO 8601 date format
[dateModified](#dateModified) | string | optional | The date on which the content  was most recently modified. A date value in ISO 8601 date format
[title](#title) | string | optional | Headline of the article
[byline](#byline) | string | optional | Comma separated list of authors of the article
[isPartOf](#isPartOf) | string | optional | Magazine or other package the article is part of
[pageStart](#pageStart) | integer | optional | If magazine or gallery, the page number
[pageEnd](#pageEnd) | integer,null | optional | Page end number if the article spans more than one page
[articleSection](#articleSection) | string | optional | The section the article belongs to
[tags](#tags) | string | optional | The articles editorial tags. Separated by comma
[isAccessibleForFree](#isAccessibleForFree) | boolean | optional | A flag to signal that the item accessible for free.
[contentModel](#contentModel) | string | optional | Model for accessing this content
[presentationMode](#presentationMode) | string | optional | Flag to indicate if the user has full access to the article or is shown an excerpt- Type: object
- is required


payload has the following properties:


`type`

Used to set the data type of the meta element. If the data type is described in the context of schema.org, only the type name is required. If the type is described in adplogger vocabularies the whole url must be used.

- Type: string
- is optional
- Deafult: `Article`
- Allowed values: Article, NewsArticle, AdvertiserContentArticle, OpinionNewsArticle, ReviewNewsArticle

`adpType`

Content type in our cms

- Type: string
- is optional
- Allowed values: story, opinion, gallery, video, embed, poll, review, ytring, section, feature

`contentId`

Content Source/Content Id

- Type: string
- is optional

`acpId`

Amedia Content Platform Id (to be removed)

- Type: string
- is optional
- Pattern: `/\d+-\d+-\d+/`

`datePublished`

Date of first broadcast/publication. A date value in ISO 8601 date format

- Type: string
- is optional

`dateModified`

The date on which the content  was most recently modified. A date value in ISO 8601 date format

- Type: string
- is optional

`title`

Headline of the article

- Type: string
- is optional

`byline`

Comma separated list of authors of the article

- Type: string
- is optional

`isPartOf`

Magazine or other package the article is part of

- Type: string
- is optional

`pageStart`

If magazine or gallery, the page number

- Type: integer
- is optional
- Min: 0

`pageEnd`

Page end number if the article spans more than one page

- Type: integer,null
- is optional
- Min: 0
- Deafult: `null`

`articleSection`

The section the article belongs to

- Type: string
- is optional

`tags`

The articles editorial tags. Separated by comma

- Type: string
- is optional

`isAccessibleForFree`

A flag to signal that the item accessible for free.

- Type: boolean
- is optional

`contentModel`

Model for accessing this content

- Type: string
- is optional
- Allowed values: paywall, registration, metered, free

`presentationMode`

Flag to indicate if the user has full access to the article or is shown an excerpt

- Type: string
- is optional
- Allowed values: full, excerpt

