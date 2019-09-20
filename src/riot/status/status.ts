import { BaseApi } from '../base'
import { Regions, endpointsV3 } from '../../enum'
import { LolStatusDTO } from '../../dto/Status/LolStatus.dto'

export class StatusApi extends BaseApi {
  /**
   * Lol status by server
   * @param region Riot region
   */
  public async get (region: Regions) {
    return this.request<LolStatusDTO>(region, endpointsV3.LolStatus)
  }
}