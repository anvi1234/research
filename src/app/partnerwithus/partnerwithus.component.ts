import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ResearchService } from '../research.service';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://test.rdcsolution.com:8080/pdf';
@Component({
  selector: 'app-partnerwithus',
  templateUrl: './partnerwithus.component.html',
  styleUrls: ['./partnerwithus.component.css']
})
export class PartnerwithusComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'pdf' });


  partnerfrom:FormGroup;
  constructor( private service:ResearchService) {
    this.partnerfrom=new FormGroup({
      name:new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.required),
      title:new FormControl(null,Validators.required),
     pdf:new FormControl(null,Validators.required)



    })
   }

   saveData(){
    this.service.adddata(this.partnerfrom.value);
    debugger;
    let userInfo = JSON.parse(sessionStorage.getItem('totoList'));
    if(userInfo.pdf!=null&&userInfo.pdf!=undefined&&userInfo!=""){
      var data=userInfo.pdf.split("\\");
    userInfo.pdf="http://test.rdcsolution.com:8080/backend/document/"+data[data.length-1];
    }
    else{
      console.log("No any file uploaded");
    }
    this.service.PartnerData(userInfo).subscribe(x => {
      return x;     

});
    }

  // saveData(){
  //   console.log(this.partnerfrom.value);
  // }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
    };
 }

}

