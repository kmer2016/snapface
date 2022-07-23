import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {
    faceSnaps:FaceSnap[] = [
        {
            id:1,
          title:"Archibald",
          description:"Mon meilleur ami depuis tout petit",
          creationDate:new Date(),
          snaps:350,
          imageUrl:"https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
          location:"Paris"
        },
        {
            id:2,
          title:"Three Rock Mountain",
          description:"Un endroit maginfique pour les randonnées.",
          creationDate:new Date(),
          snaps:0,
          imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg",
          location:"Montagne"
        },
        {
            id:3,
          title:"Un bon repas",
          description:"Miam ! que c'est bon !",
          creationDate:new Date(),
          snaps:0,
          imageUrl:"https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg"
        }
      ];


    getAllFaceSnaps(){
        return this.faceSnaps;
    }

    getFacSnapById(faceSnapId:number){
        const facesnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if(facesnap){
            return facesnap;
        }else{
            throw new Error("FaceSnap not found !");
        }
    }

    snapFaceSnapById(faceSnapId:number, snapType: 'snap' | 'unsnap'):void{
        const faceSnap =  this.getFacSnapById(faceSnapId);
        snapType === "snap" ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}