export interface Service<T, U> {
  name: U
  enabled: boolean
  init: (env: Environment) => any | Promise<any>
  identify?: (user: object) => Promise<void> | void // TODO: Replace this with our final user type
  close?: () => Promise<void> | void
  getInstance: () => T
}

export type ServiceStatus = {
  initialized?: boolean
  identified?: boolean
  closed?: boolean
}
