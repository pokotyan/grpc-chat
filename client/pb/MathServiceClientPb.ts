/**
 * @fileoverview gRPC-Web generated client stub for math
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as math_pb from './math_pb';


export class MathServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorAdd = new grpcWeb.MethodDescriptor(
    '/math.MathService/Add',
    grpcWeb.MethodType.UNARY,
    math_pb.MathRequest,
    math_pb.MathResponse,
    (request: math_pb.MathRequest) => {
      return request.serializeBinary();
    },
    math_pb.MathResponse.deserializeBinary
  );

  add(
    request: math_pb.MathRequest,
    metadata: grpcWeb.Metadata | null): Promise<math_pb.MathResponse>;

  add(
    request: math_pb.MathRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: math_pb.MathResponse) => void): grpcWeb.ClientReadableStream<math_pb.MathResponse>;

  add(
    request: math_pb.MathRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: math_pb.MathResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/math.MathService/Add',
        request,
        metadata || {},
        this.methodDescriptorAdd,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/math.MathService/Add',
    request,
    metadata || {},
    this.methodDescriptorAdd);
  }

  methodDescriptorSubtract = new grpcWeb.MethodDescriptor(
    '/math.MathService/Subtract',
    grpcWeb.MethodType.UNARY,
    math_pb.MathRequest,
    math_pb.MathResponse,
    (request: math_pb.MathRequest) => {
      return request.serializeBinary();
    },
    math_pb.MathResponse.deserializeBinary
  );

  subtract(
    request: math_pb.MathRequest,
    metadata: grpcWeb.Metadata | null): Promise<math_pb.MathResponse>;

  subtract(
    request: math_pb.MathRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: math_pb.MathResponse) => void): grpcWeb.ClientReadableStream<math_pb.MathResponse>;

  subtract(
    request: math_pb.MathRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: math_pb.MathResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/math.MathService/Subtract',
        request,
        metadata || {},
        this.methodDescriptorSubtract,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/math.MathService/Subtract',
    request,
    metadata || {},
    this.methodDescriptorSubtract);
  }

  methodDescriptorMultiply = new grpcWeb.MethodDescriptor(
    '/math.MathService/Multiply',
    grpcWeb.MethodType.UNARY,
    math_pb.MathRequest,
    math_pb.MathResponse,
    (request: math_pb.MathRequest) => {
      return request.serializeBinary();
    },
    math_pb.MathResponse.deserializeBinary
  );

  multiply(
    request: math_pb.MathRequest,
    metadata: grpcWeb.Metadata | null): Promise<math_pb.MathResponse>;

  multiply(
    request: math_pb.MathRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: math_pb.MathResponse) => void): grpcWeb.ClientReadableStream<math_pb.MathResponse>;

  multiply(
    request: math_pb.MathRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: math_pb.MathResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/math.MathService/Multiply',
        request,
        metadata || {},
        this.methodDescriptorMultiply,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/math.MathService/Multiply',
    request,
    metadata || {},
    this.methodDescriptorMultiply);
  }

  methodDescriptorDivide = new grpcWeb.MethodDescriptor(
    '/math.MathService/Divide',
    grpcWeb.MethodType.UNARY,
    math_pb.MathRequest,
    math_pb.MathResponse,
    (request: math_pb.MathRequest) => {
      return request.serializeBinary();
    },
    math_pb.MathResponse.deserializeBinary
  );

  divide(
    request: math_pb.MathRequest,
    metadata: grpcWeb.Metadata | null): Promise<math_pb.MathResponse>;

  divide(
    request: math_pb.MathRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: math_pb.MathResponse) => void): grpcWeb.ClientReadableStream<math_pb.MathResponse>;

  divide(
    request: math_pb.MathRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: math_pb.MathResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/math.MathService/Divide',
        request,
        metadata || {},
        this.methodDescriptorDivide,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/math.MathService/Divide',
    request,
    metadata || {},
    this.methodDescriptorDivide);
  }

}

