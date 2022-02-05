import * as jspb from 'google-protobuf'



export class MathRequest extends jspb.Message {
  getNuma(): number;
  setNuma(value: number): MathRequest;

  getNumb(): number;
  setNumb(value: number): MathRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MathRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MathRequest): MathRequest.AsObject;
  static serializeBinaryToWriter(message: MathRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MathRequest;
  static deserializeBinaryFromReader(message: MathRequest, reader: jspb.BinaryReader): MathRequest;
}

export namespace MathRequest {
  export type AsObject = {
    numa: number,
    numb: number,
  }
}

export class MathResponse extends jspb.Message {
  getResult(): number;
  setResult(value: number): MathResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MathResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MathResponse): MathResponse.AsObject;
  static serializeBinaryToWriter(message: MathResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MathResponse;
  static deserializeBinaryFromReader(message: MathResponse, reader: jspb.BinaryReader): MathResponse;
}

export namespace MathResponse {
  export type AsObject = {
    result: number,
  }
}

