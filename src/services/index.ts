import Environment from '@app/utils/environment'
import i18n from './i18n'
import { Service, ServiceStatus } from './types'

const services = [i18n]
const serviceStatus: Record<string, ServiceStatus> = {}

type ServiceMap<Services extends Service<any, any>[]> = {
  [Service in Services[number] as Service['name']]?: ReturnType<Service['getInstance']>
}

const servicesMap: ServiceMap<typeof services> = {}

/**
 * Initialize all services and store instances in servicesMap.
 */
export const init = () =>
  new Promise((resolve) => {
    services.forEach(async (service, index, list) => {
      if (service.enabled && serviceStatus[service.name]?.initialized !== true) {
        await service.init(Environment)
        serviceStatus[service.name] = {
          initialized: true,
        }
        // @ts-ignore
        servicesMap[service.name] = service.getInstance()
      } else {
        // @ts-ignore
        servicesMap[service.name] = {}
      }
      if (index === list.length - 1) {
        resolve(servicesMap)
      }
    })
  })

/**
 * Identify a user with all services that required to know the user.
 */
export const identify = (user: any) => {
  services.forEach(async (service) => {
    if (service.identify && service.enabled) {
      await service.identify(user)
      serviceStatus[service.name] = {
        ...serviceStatus[service.name],
        identified: true,
      }
    }
  })
}

/**
 * Close connection to services that need to be closed.
 */
export const close = () => {
  services.forEach(async (service) => {
    if (service.close && service.enabled) {
      service.close()
      serviceStatus[service.name] = {
        ...serviceStatus[service.name],
        closed: true,
      }
    }
  })
}

export const getServiceStatus = () => serviceStatus

export default servicesMap
