export interface ICoffeeApi {
  id: number;
  uid: string;
  blend_name: string;
  origin: string;
  variety: string;
  notes: string;
  intensifier: string;
}

export interface ICoffee {
  id: number;
  uid: string;
  blendName: string;
  origin: string;
  variety: string;
  notes: string[];
  intensifier: string;
}

export class Coffee implements ICoffee {
  id: number;
  uid: string;
  blendName: string;
  origin: string;
  variety: string;
  notes: string[];
  intensifier: string;

  constructor(data: ICoffeeApi) {
    this.id = data.id;
    this.uid = data.uid;
    this.blendName = data.blend_name;
    this.origin = data.origin;
    this.variety = data.variety;
    this.notes = data.notes.split(", ");
    this.intensifier = data.intensifier;
  }
}
