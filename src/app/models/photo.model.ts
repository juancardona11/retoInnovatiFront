
  export interface FaceRectangle {
      top: number;
      left: number;
      width: number;
      height: number;
  }

  export interface HeadPose {
      pitch: number;
      roll: number;
      yaw: number;
  }

  export interface FacialHair {
      moustache: number;
      beard: number;
      sideburns: number;
  }

  export interface Emotion {
      anger: number;
      contempt: number;
      disgust: number;
      fear: number;
      happiness: number;
      neutral: number;
      sadness: number;
      surprise: number;
  }

  export interface Blur {
      blurLevel: string;
      value: number;
  }

  export interface Exposure {
      exposureLevel: string;
      value: number;
  }

  export interface Noise {
      noiseLevel: string;
      value: number;
  }

  export interface Makeup {
      eyeMakeup: boolean;
      lipMakeup: boolean;
  }

  export interface Occlusion {
      foreheadOccluded: boolean;
      eyeOccluded: boolean;
      mouthOccluded: boolean;
  }

  export interface HairColor {
      color: string;
      confidence: number;
  }

  export interface Hair {
      bald: number;
      invisible: boolean;
      hairColor: HairColor[];
  }

  export interface FaceAttributes {
      smile: number;
      headPose: HeadPose;
      gender: string;
      age: number;
      facialHair: FacialHair;
      glasses: string;
      emotion: Emotion;
      blur: Blur;
      exposure: Exposure;
      noise: Noise;
      makeup: Makeup;
      accessories: any[];
      occlusion: Occlusion;
      hair: Hair;
  }

  export interface Photo {
      faceId: string;
      faceRectangle: FaceRectangle;
      faceAttributes: FaceAttributes;
  }


