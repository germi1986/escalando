export const metaCapiEventNames = ["Contact", "Lead", "ViewContent", "PageView"] as const;

export type MetaCapiEventName = (typeof metaCapiEventNames)[number];

export type MetaCustomData = {
  cta_text?: string;
  cta_location?: string;
  page_path?: string;
  content_name?: string;
};

export type MetaCapiRequestBody = {
  eventName: MetaCapiEventName;
  eventId: string;
  eventSourceUrl: string;
  fbp?: string;
  fbc?: string;
  customData?: MetaCustomData;
};
