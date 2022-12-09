import { loadRemoteModule } from '@angular-architects/module-federation';
import { Injectable } from '@angular/core';
import { Appointment } from 'projects/appointment/models/appointment';

// const m = await loadRemoteModule({
//     type: 'module',
//     remoteEntry: 'http://localhost:4201/remoteEntry.js',
//     exposedModule: './Component'
// });
@Injectable({
  providedIn: 'root',
})
export class ScheduleModuleService {


  constructor() {
    // tslint:disable-next-line: quotemark
  }
  public async getScheduleComponentRef() : Promise<any> {
    const m = await loadRemoteModule({
        type: 'manifest',
        remoteName: 'mfe1',
        exposedModule: './Component'
    })
    return m.ScheduleIntegrationComponent
  }

}


