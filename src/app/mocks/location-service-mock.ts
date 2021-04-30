import { Observable } from "rxjs";
import { Loc } from "../models/location";

export class LocationServiceMock {
    getLocations(): Loc[] { 
        return [ 
            {city: "houston", 
             state: "Texas",
             id: 1}
        ]
    }
}
