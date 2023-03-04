export type SitecoreItemDetails = {
  name: string
  id: string
  field: {
    name: string
    value: string
  }
}

export type GetSitecoreItemDetailsRequest = {
  item: SitecoreItemDetails
}

export type getSitecoreItemDetailsQueryParameter = {
  itemIdOrPath: string
}

export type PrefetchSitecoreItemProps = {
  itemIdOrPath: string
}

export interface GetSitecoreItemDetails {
  data: SitecoreItemDetails
}