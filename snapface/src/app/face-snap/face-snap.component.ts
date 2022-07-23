import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!:string;


  constructor( private faceSnapsService: FaceSnapsService, private router:Router){}

  ngOnInit(): void {
    this.buttonText = "Oh Snap !"
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

  onViewFaceSNap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }

}
