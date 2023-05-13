## 介绍
一个简单的GraphQL的代码模型数据查询的后端，使用MongoDB作为数据库，
NestJs框架，Prisma ORM。

## 用法
使用如下命令进行代码模型proto二进制文件上传
```shell
curl http://localhost:3000/upload/beacon-model -F 'file=@/Users/yourName/projects/Clion/CXXScanner/result/test.dump' -F 'name=test'
```
proto具体定义在src/upload/proto/Project.proto的ProjectDumpFormat
，符合这个格式的文件大概也许可能大概率都能上传吧。

## 运行需要注意的

运行generate-protos脚本更新相关ts文件

.env.example重命名为.env并且设置数据库地址

npm run dev