export interface ProductDetailModel {
    resource:Array<resource>;
}

export interface resource {
    ConsumedQuantity: number,
    Cost: number,
    Date: string,
    InstanceId: string,
    MeterCategory: string,
    ResourceGroup: string,
    ResourceLocation: string,
    Tags: {
      appName: string,
      environment: string,
      businessUnit: string
    },
    UnitOfMeasure: string,
    Location: string,
    ServiceName: string
}

export interface ProductDetailResource {
   productDetails: ProductDetailModel;
}