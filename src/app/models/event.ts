export interface Event {
    $key: string
    id: string
    start: Date
    end: Date
    title: string
    color: {
      value: string,
      colorHex: {
        primary: string,
        secondary: string
      }
    }
  }