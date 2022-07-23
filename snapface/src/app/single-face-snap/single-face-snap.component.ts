import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  buttonText!:string;
  faceSnap!:FaceSnap;

  constructor( private faceSnapsService: FaceSnapsService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.buttonText = "Oh Snap !"
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFacSnapById(faceSnapId);
  }

  onSnap(){

    if(this.buttonText == "Oh Snap !"){
      this.buttonText = "Oops, unSnap !"
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    }else{
      this.buttonText = "Oh Snap !"
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    }
  }

}
