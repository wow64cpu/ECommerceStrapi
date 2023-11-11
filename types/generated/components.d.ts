import type { Schema, Attribute } from '@strapi/strapi';

export interface ExtMoney extends Schema.Component {
  collectionName: 'components_ext_monies';
  info: {
    displayName: 'Money';
    icon: 'priceTag';
  };
  attributes: {
    amount: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
      }>;
    currency: Attribute.String & Attribute.Required;
  };
}

export interface ExtPictogram extends Schema.Component {
  collectionName: 'components_ext_pictograms';
  info: {
    displayName: 'Pictogram';
    icon: 'pinMap';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    color: Attribute.String & Attribute.Required;
  };
}

export interface ExtProductVariant extends Schema.Component {
  collectionName: 'components_ext_product_variants';
  info: {
    displayName: 'ProductVariant';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    description: Attribute.String & Attribute.Required;
    images: Attribute.Media & Attribute.Required;
    pictogram: Attribute.Component<'ext.pictogram'>;
    quantity: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
      }>;
    price: Attribute.Component<'ext.money'>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ext.money': ExtMoney;
      'ext.pictogram': ExtPictogram;
      'ext.product-variant': ExtProductVariant;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
