/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { FileInfo } from "./File";

export const protobufPackage = "beacon.model";

export interface ProjectDumpFormat {
  id?: string | undefined;
  name?: string | undefined;
  date?: string | undefined;
  fileInfoList: FileInfo[];
}

function createBaseProjectDumpFormat(): ProjectDumpFormat {
  return { id: undefined, name: undefined, date: undefined, fileInfoList: [] };
}

export const ProjectDumpFormat = {
  encode(message: ProjectDumpFormat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.date !== undefined) {
      writer.uint32(26).string(message.date);
    }
    for (const v of message.fileInfoList) {
      FileInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectDumpFormat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectDumpFormat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.date = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fileInfoList.push(FileInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProjectDumpFormat {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      date: isSet(object.date) ? String(object.date) : undefined,
      fileInfoList: Array.isArray(object?.fileInfoList)
        ? object.fileInfoList.map((e: any) => FileInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ProjectDumpFormat): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.date !== undefined && (obj.date = message.date);
    if (message.fileInfoList) {
      obj.fileInfoList = message.fileInfoList.map((e) => e ? FileInfo.toJSON(e) : undefined);
    } else {
      obj.fileInfoList = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProjectDumpFormat>, I>>(base?: I): ProjectDumpFormat {
    return ProjectDumpFormat.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProjectDumpFormat>, I>>(object: I): ProjectDumpFormat {
    const message = createBaseProjectDumpFormat();
    message.id = object.id ?? undefined;
    message.name = object.name ?? undefined;
    message.date = object.date ?? undefined;
    message.fileInfoList = object.fileInfoList?.map((e) => FileInfo.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
