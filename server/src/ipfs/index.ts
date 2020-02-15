import { IPFSInterface } from './IPFSInterface'
import { IPFSImpl } from './IPFSImpl'
import { IPFSModule } from './module'

export * from './IPFSImpl'
export * from './IPFSInterface'


const IPFSProxy: IPFSInterface = new IPFSImpl(IPFSModule);

export {
    IPFSProxy
}