package transport

import (
	"context"
	"grpc-chat/service"

	"grpc-chat/endpoints"
	"grpc-chat/pb"

	"github.com/go-kit/kit/log"
	gt "github.com/go-kit/kit/transport/grpc"
)

type gRPCServer struct {
	add      gt.Handler
	subtract gt.Handler
	multiply gt.Handler
	divide   gt.Handler
}

func NewMathServer(ms service.MathService, logger log.Logger) pb.MathServiceServer {
	return &gRPCServer{
		add: gt.NewServer(
			endpoints.MakeAddEndpoint(ms),
			endpoints.DecodeMathRequest,
			endpoints.EncodeMathResponse,
		),
		subtract: gt.NewServer(
			endpoints.MakeSubtractEndpoint(ms),
			endpoints.DecodeMathRequest,
			endpoints.EncodeMathResponse,
		),
		multiply: gt.NewServer(
			endpoints.MakeMultiplyEndpoint(ms),
			endpoints.DecodeMathRequest,
			endpoints.EncodeMathResponse,
		),
		divide: gt.NewServer(
			endpoints.MakeDivideEndpoint(ms),
			endpoints.DecodeMathRequest,
			endpoints.EncodeMathResponse,
		),
	}
}

func (s *gRPCServer) Add(ctx context.Context, req *pb.MathRequest) (*pb.MathResponse, error) {
	_, resp, err := s.add.ServeGRPC(ctx, req)
	if err != nil {
		return nil, err
	}
	return resp.(*pb.MathResponse), nil
}

func (s *gRPCServer) Subtract(ctx context.Context, req *pb.MathRequest) (*pb.MathResponse, error) {
	_, resp, err := s.subtract.ServeGRPC(ctx, req)
	if err != nil {
		return nil, err
	}
	return resp.(*pb.MathResponse), nil
}

func (s *gRPCServer) Multiply(ctx context.Context, req *pb.MathRequest) (*pb.MathResponse, error) {
	_, resp, err := s.multiply.ServeGRPC(ctx, req)
	if err != nil {
		return nil, err
	}
	return resp.(*pb.MathResponse), nil
}

func (s *gRPCServer) Divide(ctx context.Context, req *pb.MathRequest) (*pb.MathResponse, error) {
	_, resp, err := s.divide.ServeGRPC(ctx, req)
	if err != nil {
		return nil, err
	}
	return resp.(*pb.MathResponse), nil
}
