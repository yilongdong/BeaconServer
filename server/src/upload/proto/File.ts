/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { CXXClass, CXXFunction, CXXFunctionRelation } from "./Code";

export const protobufPackage = "beacon.model";

/** brew install cloc */
export interface ClocInfo {
  language?: string | undefined;
  blank?: number | undefined;
  comment?: number | undefined;
  code?: number | undefined;
}

/** brew install git-extras */
export interface GitInfo {
  commitId?: string | undefined;
  date?: string | undefined;
}

/** pip install lizard */
export interface CycloInfo {
  functionName?: string | undefined;
  lineOfCode?: number | undefined;
  cyclomaticComplexity?: number | undefined;
  tokenCount?: number | undefined;
  parameterCount?: number | undefined;
}

export interface InclusionInfo {
  line?: number | undefined;
  column?: number | undefined;
  path?: string | undefined;
}

export interface CallGraph {
  relations: CXXFunctionRelation[];
}

export interface TUInfo {
  id?: string | undefined;
  classList: CXXClass[];
  functionList: CXXFunction[];
  callGraph?: CallGraph | undefined;
}

export interface FileInfo {
  id?: string | undefined;
  filename?: string | undefined;
  directory?: string | undefined;
  path?: string | undefined;
  gitInfo: GitInfo[];
  clocInfo?: ClocInfo | undefined;
  cycloInfoList: CycloInfo[];
  inclusions: InclusionInfo[];
  tuInfo?: TUInfo | undefined;
}

function createBaseClocInfo(): ClocInfo {
  return { language: undefined, blank: undefined, comment: undefined, code: undefined };
}

export const ClocInfo = {
  encode(message: ClocInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.language !== undefined) {
      writer.uint32(10).string(message.language);
    }
    if (message.blank !== undefined) {
      writer.uint32(16).uint32(message.blank);
    }
    if (message.comment !== undefined) {
      writer.uint32(24).uint32(message.comment);
    }
    if (message.code !== undefined) {
      writer.uint32(32).uint32(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClocInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClocInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.language = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.blank = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.comment = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.code = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClocInfo {
    return {
      language: isSet(object.language) ? String(object.language) : undefined,
      blank: isSet(object.blank) ? Number(object.blank) : undefined,
      comment: isSet(object.comment) ? Number(object.comment) : undefined,
      code: isSet(object.code) ? Number(object.code) : undefined,
    };
  },

  toJSON(message: ClocInfo): unknown {
    const obj: any = {};
    message.language !== undefined && (obj.language = message.language);
    message.blank !== undefined && (obj.blank = Math.round(message.blank));
    message.comment !== undefined && (obj.comment = Math.round(message.comment));
    message.code !== undefined && (obj.code = Math.round(message.code));
    return obj;
  },

  create<I extends Exact<DeepPartial<ClocInfo>, I>>(base?: I): ClocInfo {
    return ClocInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ClocInfo>, I>>(object: I): ClocInfo {
    const message = createBaseClocInfo();
    message.language = object.language ?? undefined;
    message.blank = object.blank ?? undefined;
    message.comment = object.comment ?? undefined;
    message.code = object.code ?? undefined;
    return message;
  },
};

function createBaseGitInfo(): GitInfo {
  return { commitId: undefined, date: undefined };
}

export const GitInfo = {
  encode(message: GitInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commitId !== undefined) {
      writer.uint32(10).string(message.commitId);
    }
    if (message.date !== undefined) {
      writer.uint32(18).string(message.date);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GitInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.commitId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.date = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GitInfo {
    return {
      commitId: isSet(object.commitId) ? String(object.commitId) : undefined,
      date: isSet(object.date) ? String(object.date) : undefined,
    };
  },

  toJSON(message: GitInfo): unknown {
    const obj: any = {};
    message.commitId !== undefined && (obj.commitId = message.commitId);
    message.date !== undefined && (obj.date = message.date);
    return obj;
  },

  create<I extends Exact<DeepPartial<GitInfo>, I>>(base?: I): GitInfo {
    return GitInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GitInfo>, I>>(object: I): GitInfo {
    const message = createBaseGitInfo();
    message.commitId = object.commitId ?? undefined;
    message.date = object.date ?? undefined;
    return message;
  },
};

function createBaseCycloInfo(): CycloInfo {
  return {
    functionName: undefined,
    lineOfCode: undefined,
    cyclomaticComplexity: undefined,
    tokenCount: undefined,
    parameterCount: undefined,
  };
}

export const CycloInfo = {
  encode(message: CycloInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.functionName !== undefined) {
      writer.uint32(10).string(message.functionName);
    }
    if (message.lineOfCode !== undefined) {
      writer.uint32(16).uint32(message.lineOfCode);
    }
    if (message.cyclomaticComplexity !== undefined) {
      writer.uint32(24).uint32(message.cyclomaticComplexity);
    }
    if (message.tokenCount !== undefined) {
      writer.uint32(32).uint32(message.tokenCount);
    }
    if (message.parameterCount !== undefined) {
      writer.uint32(40).uint32(message.parameterCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CycloInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCycloInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.functionName = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.lineOfCode = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.cyclomaticComplexity = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.tokenCount = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.parameterCount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CycloInfo {
    return {
      functionName: isSet(object.functionName) ? String(object.functionName) : undefined,
      lineOfCode: isSet(object.lineOfCode) ? Number(object.lineOfCode) : undefined,
      cyclomaticComplexity: isSet(object.cyclomaticComplexity) ? Number(object.cyclomaticComplexity) : undefined,
      tokenCount: isSet(object.tokenCount) ? Number(object.tokenCount) : undefined,
      parameterCount: isSet(object.parameterCount) ? Number(object.parameterCount) : undefined,
    };
  },

  toJSON(message: CycloInfo): unknown {
    const obj: any = {};
    message.functionName !== undefined && (obj.functionName = message.functionName);
    message.lineOfCode !== undefined && (obj.lineOfCode = Math.round(message.lineOfCode));
    message.cyclomaticComplexity !== undefined && (obj.cyclomaticComplexity = Math.round(message.cyclomaticComplexity));
    message.tokenCount !== undefined && (obj.tokenCount = Math.round(message.tokenCount));
    message.parameterCount !== undefined && (obj.parameterCount = Math.round(message.parameterCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<CycloInfo>, I>>(base?: I): CycloInfo {
    return CycloInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CycloInfo>, I>>(object: I): CycloInfo {
    const message = createBaseCycloInfo();
    message.functionName = object.functionName ?? undefined;
    message.lineOfCode = object.lineOfCode ?? undefined;
    message.cyclomaticComplexity = object.cyclomaticComplexity ?? undefined;
    message.tokenCount = object.tokenCount ?? undefined;
    message.parameterCount = object.parameterCount ?? undefined;
    return message;
  },
};

function createBaseInclusionInfo(): InclusionInfo {
  return { line: undefined, column: undefined, path: undefined };
}

export const InclusionInfo = {
  encode(message: InclusionInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.line !== undefined) {
      writer.uint32(8).uint32(message.line);
    }
    if (message.column !== undefined) {
      writer.uint32(16).uint32(message.column);
    }
    if (message.path !== undefined) {
      writer.uint32(26).string(message.path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InclusionInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInclusionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.line = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.column = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.path = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InclusionInfo {
    return {
      line: isSet(object.line) ? Number(object.line) : undefined,
      column: isSet(object.column) ? Number(object.column) : undefined,
      path: isSet(object.path) ? String(object.path) : undefined,
    };
  },

  toJSON(message: InclusionInfo): unknown {
    const obj: any = {};
    message.line !== undefined && (obj.line = Math.round(message.line));
    message.column !== undefined && (obj.column = Math.round(message.column));
    message.path !== undefined && (obj.path = message.path);
    return obj;
  },

  create<I extends Exact<DeepPartial<InclusionInfo>, I>>(base?: I): InclusionInfo {
    return InclusionInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<InclusionInfo>, I>>(object: I): InclusionInfo {
    const message = createBaseInclusionInfo();
    message.line = object.line ?? undefined;
    message.column = object.column ?? undefined;
    message.path = object.path ?? undefined;
    return message;
  },
};

function createBaseCallGraph(): CallGraph {
  return { relations: [] };
}

export const CallGraph = {
  encode(message: CallGraph, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.relations) {
      CXXFunctionRelation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CallGraph {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCallGraph();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.relations.push(CXXFunctionRelation.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CallGraph {
    return {
      relations: Array.isArray(object?.relations)
        ? object.relations.map((e: any) => CXXFunctionRelation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CallGraph): unknown {
    const obj: any = {};
    if (message.relations) {
      obj.relations = message.relations.map((e) => e ? CXXFunctionRelation.toJSON(e) : undefined);
    } else {
      obj.relations = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CallGraph>, I>>(base?: I): CallGraph {
    return CallGraph.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CallGraph>, I>>(object: I): CallGraph {
    const message = createBaseCallGraph();
    message.relations = object.relations?.map((e) => CXXFunctionRelation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTUInfo(): TUInfo {
  return { id: undefined, classList: [], functionList: [], callGraph: undefined };
}

export const TUInfo = {
  encode(message: TUInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.classList) {
      CXXClass.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.functionList) {
      CXXFunction.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.callGraph !== undefined) {
      CallGraph.encode(message.callGraph, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TUInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTUInfo();
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

          message.classList.push(CXXClass.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.functionList.push(CXXFunction.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.callGraph = CallGraph.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TUInfo {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      classList: Array.isArray(object?.classList) ? object.classList.map((e: any) => CXXClass.fromJSON(e)) : [],
      functionList: Array.isArray(object?.functionList)
        ? object.functionList.map((e: any) => CXXFunction.fromJSON(e))
        : [],
      callGraph: isSet(object.callGraph) ? CallGraph.fromJSON(object.callGraph) : undefined,
    };
  },

  toJSON(message: TUInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.classList) {
      obj.classList = message.classList.map((e) => e ? CXXClass.toJSON(e) : undefined);
    } else {
      obj.classList = [];
    }
    if (message.functionList) {
      obj.functionList = message.functionList.map((e) => e ? CXXFunction.toJSON(e) : undefined);
    } else {
      obj.functionList = [];
    }
    message.callGraph !== undefined &&
      (obj.callGraph = message.callGraph ? CallGraph.toJSON(message.callGraph) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<TUInfo>, I>>(base?: I): TUInfo {
    return TUInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TUInfo>, I>>(object: I): TUInfo {
    const message = createBaseTUInfo();
    message.id = object.id ?? undefined;
    message.classList = object.classList?.map((e) => CXXClass.fromPartial(e)) || [];
    message.functionList = object.functionList?.map((e) => CXXFunction.fromPartial(e)) || [];
    message.callGraph = (object.callGraph !== undefined && object.callGraph !== null)
      ? CallGraph.fromPartial(object.callGraph)
      : undefined;
    return message;
  },
};

function createBaseFileInfo(): FileInfo {
  return {
    id: undefined,
    filename: undefined,
    directory: undefined,
    path: undefined,
    gitInfo: [],
    clocInfo: undefined,
    cycloInfoList: [],
    inclusions: [],
    tuInfo: undefined,
  };
}

export const FileInfo = {
  encode(message: FileInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.filename !== undefined) {
      writer.uint32(18).string(message.filename);
    }
    if (message.directory !== undefined) {
      writer.uint32(26).string(message.directory);
    }
    if (message.path !== undefined) {
      writer.uint32(34).string(message.path);
    }
    for (const v of message.gitInfo) {
      GitInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.clocInfo !== undefined) {
      ClocInfo.encode(message.clocInfo, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.cycloInfoList) {
      CycloInfo.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.inclusions) {
      InclusionInfo.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.tuInfo !== undefined) {
      TUInfo.encode(message.tuInfo, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileInfo();
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

          message.filename = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.directory = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.path = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.gitInfo.push(GitInfo.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.clocInfo = ClocInfo.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.cycloInfoList.push(CycloInfo.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.inclusions.push(InclusionInfo.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.tuInfo = TUInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FileInfo {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      filename: isSet(object.filename) ? String(object.filename) : undefined,
      directory: isSet(object.directory) ? String(object.directory) : undefined,
      path: isSet(object.path) ? String(object.path) : undefined,
      gitInfo: Array.isArray(object?.gitInfo) ? object.gitInfo.map((e: any) => GitInfo.fromJSON(e)) : [],
      clocInfo: isSet(object.clocInfo) ? ClocInfo.fromJSON(object.clocInfo) : undefined,
      cycloInfoList: Array.isArray(object?.cycloInfoList)
        ? object.cycloInfoList.map((e: any) => CycloInfo.fromJSON(e))
        : [],
      inclusions: Array.isArray(object?.inclusions) ? object.inclusions.map((e: any) => InclusionInfo.fromJSON(e)) : [],
      tuInfo: isSet(object.tuInfo) ? TUInfo.fromJSON(object.tuInfo) : undefined,
    };
  },

  toJSON(message: FileInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.filename !== undefined && (obj.filename = message.filename);
    message.directory !== undefined && (obj.directory = message.directory);
    message.path !== undefined && (obj.path = message.path);
    if (message.gitInfo) {
      obj.gitInfo = message.gitInfo.map((e) => e ? GitInfo.toJSON(e) : undefined);
    } else {
      obj.gitInfo = [];
    }
    message.clocInfo !== undefined && (obj.clocInfo = message.clocInfo ? ClocInfo.toJSON(message.clocInfo) : undefined);
    if (message.cycloInfoList) {
      obj.cycloInfoList = message.cycloInfoList.map((e) => e ? CycloInfo.toJSON(e) : undefined);
    } else {
      obj.cycloInfoList = [];
    }
    if (message.inclusions) {
      obj.inclusions = message.inclusions.map((e) => e ? InclusionInfo.toJSON(e) : undefined);
    } else {
      obj.inclusions = [];
    }
    message.tuInfo !== undefined && (obj.tuInfo = message.tuInfo ? TUInfo.toJSON(message.tuInfo) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<FileInfo>, I>>(base?: I): FileInfo {
    return FileInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FileInfo>, I>>(object: I): FileInfo {
    const message = createBaseFileInfo();
    message.id = object.id ?? undefined;
    message.filename = object.filename ?? undefined;
    message.directory = object.directory ?? undefined;
    message.path = object.path ?? undefined;
    message.gitInfo = object.gitInfo?.map((e) => GitInfo.fromPartial(e)) || [];
    message.clocInfo = (object.clocInfo !== undefined && object.clocInfo !== null)
      ? ClocInfo.fromPartial(object.clocInfo)
      : undefined;
    message.cycloInfoList = object.cycloInfoList?.map((e) => CycloInfo.fromPartial(e)) || [];
    message.inclusions = object.inclusions?.map((e) => InclusionInfo.fromPartial(e)) || [];
    message.tuInfo = (object.tuInfo !== undefined && object.tuInfo !== null)
      ? TUInfo.fromPartial(object.tuInfo)
      : undefined;
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
