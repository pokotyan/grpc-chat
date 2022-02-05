#!/bin/sh

set -xe

SERVER_OUTPUT_DIR=server/pb
CLIENT_OUTPUT_DIR=client/pb

protoc --version
protoc --proto_path=proto math.proto \
  --go_out=plugins="grpc:${SERVER_OUTPUT_DIR}" \
  --js_out=import_style=commonjs:${CLIENT_OUTPUT_DIR} \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:${CLIENT_OUTPUT_DIR}
