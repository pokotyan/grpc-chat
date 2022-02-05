package main

import (
	"fmt"
	"grpc-chat/service"
	"net"
	"os"
	"os/signal"
	"syscall"

	"google.golang.org/grpc/reflection"

	"grpc-chat/pb"
	"grpc-chat/transport"

	"github.com/go-kit/kit/log"
	"github.com/go-kit/kit/log/level"
	"google.golang.org/grpc"
)

func main() {
	var logger log.Logger
	logger = log.NewJSONLogger(os.Stdout)
	logger = log.With(logger, "ts", log.DefaultTimestampUTC)
	logger = log.With(logger, "caller", log.DefaultCaller)

	var ms service.MathService
	ms = service.NewMathService(logger)
	mathServer := transport.NewMathServer(ms, logger)

	errs := make(chan error)
	go func() {
		c := make(chan os.Signal)
		signal.Notify(c, syscall.SIGINT, syscall.SIGTERM, syscall.SIGALRM)
		errs <- fmt.Errorf("%s", <-c)
	}()

	listener, err := net.Listen("tcp", ":50051")
	if err != nil {
		logger.Log("during", "Listen", "err", err)
		os.Exit(1)
	}

	go func() {
		baseServer := grpc.NewServer()
		pb.RegisterMathServiceServer(baseServer, mathServer)
		reflection.Register(baseServer)
		level.Info(logger).Log("msg", "Server started successfully 🚀")
		baseServer.Serve(listener)
	}()

	level.Error(logger).Log("exit", <-errs)
}
