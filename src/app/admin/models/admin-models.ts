export interface OptionItem {
    Title: string; Description: string; Price: number
  }
  
export interface ServiceItem{
    icon?: string,
    service: string,
    description?: string,
    minPrice: number,
    maxPrice: number,
    min?: number,
    options: OptionItem[]
  }
  
export  interface ServiceItems extends Array<ServiceItem>{}