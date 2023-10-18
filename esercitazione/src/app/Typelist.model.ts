export interface Typelist {
    count: number
    next: any
    previous: any
    results: Type[]
  }
  
  export interface Type {
    name: string
    url: string
  }