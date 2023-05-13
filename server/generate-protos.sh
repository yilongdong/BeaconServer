# 在server目录下运行
protoc --proto_path=./src/upload/proto/ --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./src/upload/proto/ ./src/upload/proto/*.proto