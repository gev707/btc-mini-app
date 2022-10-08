interface IGlobalConfigData {
    isLoading: boolean,
    responseError?:IResponseError
}
export interface IResponseError {
    response?:string
}

export interface ICurrency {
    bpi: {
        [key: string]: IBpi
    },
    time: ITime,
    chartName: string
}

interface IBpi {
    code: string,
    symbol: string,
    description: string,
    rate_float: number
}

interface ITime {
    updated: string
}

export interface ICurrencyConfigDataStore extends IGlobalConfigData {
    currency: {
        bpi: {
            [key: string]: IBpi
        },
        time: ITime,
        chartName: string
    },
}