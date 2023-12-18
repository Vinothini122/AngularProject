import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  map:Map | any;
  visible: any = false;
  tableVisible:any = false;
  name:any;
  lat:any;
  lon:any
  details:any=[];
    ngOnInit() {
      this.map = new Map({
        view: new View({
          center: [0, 0],
          zoom: 1,
        }),
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        target: 'ol-map'
      });
    }
  mapEventClick(event:any){
    var coordinate = this.map.getEventPixel(event);
    console.log("coordinate",coordinate);
    console.log("coordinate0",coordinate[0]);
    console.log("coordinate1",coordinate[1]);
    this.visible=true;
    this.lat = coordinate[0];
    this.lon = coordinate[1];
    console.log("location",this.lon);
  }
  onSubmitClick(){
    if(this.name && this.lat && this.lon){
      this.visible=false;
      this.tableVisible = true;
      let data = new Details();
      data.name = this.name;
      data.latitude = this.lat;
      data.longitude= this.lon;
      this.details.push(data);
      this.name="";
    }
  }

  deleteClick(data:any){
   
  }
}

export class Details{
  name:any;
  latitude:any;
  longitude:any;
}

