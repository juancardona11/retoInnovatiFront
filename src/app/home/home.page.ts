import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PhotoService } from '../services/photo.service';
import { AudioService} from '../services/audio.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Photo } from '../models/photo.model';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  picture;
  response: any = {}  ;
  myForm: FormGroup;
  photo: Photo ;

  constructor(private camera: Camera, 
              private photoService: PhotoService,
              private audioService: AudioService, 
              private formBuilder: FormBuilder) {
              }
             
  
  takePhoto(){
        //Opciones de la Cámara
        const options: CameraOptions = {
          quality: 50,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          correctOrientation: true
        }
        //Se captura el frame y se guarda en base64
        this.camera.getPicture(options).then((imageData) => {
                this.picture = 'data:image/jpeg;base64,' + imageData;
                this.myForm = this.formBuilder.group({
                              img: [this.picture]
                });
                this.consum();     
        });
  }
  // Se consume el servicio para enviar el frame y consumir la API
  async consum(){
        this.response =  await this.photoService.sendPhoto(this.myForm.value)
                                   .toPromise();
        this.response = JSON.parse(this.response);
        this.photo = this.response[0];
        console.log(this.photo);
        this.generateAudio(); 
  }

  //Se comsume el servicio y la API(Azure) para generar el audio con el respectivo texto
 async generateAudio(){
        //Se genera el texto dependiendo del valor del género
        if(this.photo.faceAttributes.gender == 'female'){
            this.myForm = this.formBuilder.group({
                          text: 'Buenos días señorita'
            });
        } else
              //Se genera el texto dependiendo del valor del género
              if( this.photo.faceAttributes.gender == 'male'){
                  this.myForm = this.formBuilder.group({
                                text: 'Buenos días caballero'
                  });
              }
      //Se consume el servicio y la API(Azure)
       await this.audioService.getAudio(this.myForm.value)
                .toPromise();
      //Se consume la API(Back) para traer el audio del servidor
      var audio =  await  new Audio("https://retoinnovati.herokuapp.com/audio");
      //Se reproduce el audio
      audio.play();
    
  }
}



