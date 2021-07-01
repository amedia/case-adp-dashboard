
# Adp Event

```
https://www.adplogger.no/json-schema/event
```

Base for all temporal log objects

Extends: [Common](./common.md)

## Properties

Name | Type | Required | Description
---- | ---- | -------- | -----------
[schemaName](#schemaName) | string | required | undefined
[payload](#payload) | object | required | Payload of the adplogger object





### schemaName

- Type: string
- is required
- Deafult: `event`


### payload

Payload of the adplogger object

Name | Type | Required | Description
---- | ---- | -------- | -----------
[deltaTimestamp](#deltaTimestamp) | integer | required | Delta time in milliseconds from first meaningfull paint
[concernsMeta](#concernsMeta) | string | required | Id reference to the object metadata object this event concerns. 
[metaType](#metaType) | string | optional | reference to the object meta type. 
[type](#type) | string | required | Type of event- Type: object
- is required


payload has the following properties:


`deltaTimestamp`

Delta time in milliseconds from first meaningfull paint

- Type: integer
- is required

`concernsMeta`

Id reference to the object metadata object this event concerns. 

- Type: string
- is required
- Pattern: `/^[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}$/`

`metaType`

reference to the object meta type. 

- Type: string
- is optional
- Allowed values: MetaElement, WebPage, WebPageElement, Article, Teaser, Video, navigation, resource, meta-comment, meta-custom, meta-error, meta-prebid, meta-legacy, NewsArticle, AdvertiserContentArticle, OpinionNewsArticle, ReviewNewsArticle, CollectionPage, ImageGallery, VideoGallery, WPAdBlock

`type`

Type of event

- Type: string
- is required
- Allowed values: click, scroll, inscreen, purchase, registration, video, video-ad, comment, custom, error, prebid, legacy

