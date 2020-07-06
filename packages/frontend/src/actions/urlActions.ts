export interface IUrlRegisterPayload {
  url: string
}
export interface IUrlRegisterAction {
  readonly type: 'URL/REGISTER'
  payload: IUrlRegisterPayload
}

export type UrlActions = IUrlRegisterAction
