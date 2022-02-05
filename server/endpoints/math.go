package endpoints

import (
	"context"
	"grpc-chat/pb"
	"grpc-chat/service"

	"github.com/go-kit/kit/endpoint"
)

type mathReq struct {
	NumA float32
	NumB float32
}

type mathResp struct {
	Result float32
}

func DecodeMathRequest(_ context.Context, request interface{}) (interface{}, error) {
	req := request.(*pb.MathRequest)
	return mathReq{NumA: req.NumA, NumB: req.NumB}, nil
}

func EncodeMathResponse(_ context.Context, response interface{}) (interface{}, error) {
	resp := response.(mathResp)
	return &pb.MathResponse{Result: resp.Result}, nil
}

func MakeAddEndpoint(s service.MathService) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (response interface{}, err error) {
		req := request.(mathReq)
		result, _ := s.Add(ctx, req.NumA, req.NumB)
		return mathResp{Result: result}, nil
	}
}

func MakeSubtractEndpoint(s service.MathService) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (response interface{}, err error) {
		req := request.(mathReq)
		result, _ := s.Subtract(ctx, req.NumA, req.NumB)
		return mathResp{Result: result}, nil
	}
}

func MakeMultiplyEndpoint(s service.MathService) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (response interface{}, err error) {
		req := request.(mathReq)
		result, _ := s.Multiply(ctx, req.NumA, req.NumB)
		return mathResp{Result: result}, nil
	}
}

func MakeDivideEndpoint(s service.MathService) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (response interface{}, err error) {
		req := request.(mathReq)
		result, _ := s.Divide(ctx, req.NumA, req.NumB)
		return mathResp{Result: result}, nil
	}
}
