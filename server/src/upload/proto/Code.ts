/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "beacon.model";

export interface CXXClass {
  id?: string | undefined;
  name?: string | undefined;
  fields: CXXField[];
  methods: CXXFunction[];
  bases: CXXBase[];
  relations: CXXClassRelation[];
  location?: Location | undefined;
  namespace?: string | undefined;
  typeAliases: TypeAlias[];
  enums: Enum[];
  constants: Constant[];
  isStruct?: boolean | undefined;
}

export interface CXXFunction {
  returnType?: CXXType | undefined;
  name?: string | undefined;
  params: CXXParam[];
  access?: CXXAccess | undefined;
  relations: CXXFunctionRelation[];
  className?: string | undefined;
  isVirtual?: boolean | undefined;
  isPureVirtual?: boolean | undefined;
  isExplicit?: boolean | undefined;
  isTemplate?: boolean | undefined;
  isConstructor?: boolean | undefined;
  isDestructor?: boolean | undefined;
  isStatic?: boolean | undefined;
  fullName?: string | undefined;
}

export interface Location {
  line?: number | undefined;
  column?: number | undefined;
  path?: string | undefined;
}

export interface CXXType {
  id?: string | undefined;
  name?:
    | string
    | undefined;
  /** 关联的类型 */
  associatedTypes: string[];
}

export interface CXXParam {
  type?: CXXType | undefined;
  name?: string | undefined;
  defaultValue?: string | undefined;
}

export interface CXXAccess {
  name: string;
  symbol: string;
}

export interface CXXField {
  type?: CXXType | undefined;
  name?: string | undefined;
  access?: CXXAccess | undefined;
}

export interface CXXBase {
  type?: CXXType | undefined;
  access?: CXXAccess | undefined;
  isVirtual?: boolean | undefined;
}

export interface TypeAlias {
  name: string;
  type: CXXType | undefined;
}

export interface Enum {
  name: string;
  constants: EnumConstant[];
}

export interface EnumConstant {
  name: string;
  value: number;
}

export interface Constant {
  name: string;
  type: CXXType | undefined;
  value: string;
}

export interface CXXInclusion {
  path?: string | undefined;
  location?: Location | undefined;
}

export interface CXXClassRelation {
  kind?: CXXClassRelation_RelationKind | undefined;
  from?: string | undefined;
  to?: string | undefined;
}

export enum CXXClassRelation_RelationKind {
  /** REL_BASE - 基类 */
  REL_BASE = 0,
  /** REL_VBASE - 虚基类 */
  REL_VBASE = 1,
  /** REL_COMP - 组合关系 */
  REL_COMP = 2,
  /** REL_ASSOC - 关联关系 */
  REL_ASSOC = 3,
  UNRECOGNIZED = -1,
}

export function cXXClassRelation_RelationKindFromJSON(object: any): CXXClassRelation_RelationKind {
  switch (object) {
    case 0:
    case "REL_BASE":
      return CXXClassRelation_RelationKind.REL_BASE;
    case 1:
    case "REL_VBASE":
      return CXXClassRelation_RelationKind.REL_VBASE;
    case 2:
    case "REL_COMP":
      return CXXClassRelation_RelationKind.REL_COMP;
    case 3:
    case "REL_ASSOC":
      return CXXClassRelation_RelationKind.REL_ASSOC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CXXClassRelation_RelationKind.UNRECOGNIZED;
  }
}

export function cXXClassRelation_RelationKindToJSON(object: CXXClassRelation_RelationKind): string {
  switch (object) {
    case CXXClassRelation_RelationKind.REL_BASE:
      return "REL_BASE";
    case CXXClassRelation_RelationKind.REL_VBASE:
      return "REL_VBASE";
    case CXXClassRelation_RelationKind.REL_COMP:
      return "REL_COMP";
    case CXXClassRelation_RelationKind.REL_ASSOC:
      return "REL_ASSOC";
    case CXXClassRelation_RelationKind.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CXXFunctionRelation {
  kind?: CXXFunctionRelation_RelationKind | undefined;
  from?: CXXFunction | undefined;
  to?: CXXFunction | undefined;
}

export enum CXXFunctionRelation_RelationKind {
  REL_CALL = 0,
  UNRECOGNIZED = -1,
}

export function cXXFunctionRelation_RelationKindFromJSON(object: any): CXXFunctionRelation_RelationKind {
  switch (object) {
    case 0:
    case "REL_CALL":
      return CXXFunctionRelation_RelationKind.REL_CALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CXXFunctionRelation_RelationKind.UNRECOGNIZED;
  }
}

export function cXXFunctionRelation_RelationKindToJSON(object: CXXFunctionRelation_RelationKind): string {
  switch (object) {
    case CXXFunctionRelation_RelationKind.REL_CALL:
      return "REL_CALL";
    case CXXFunctionRelation_RelationKind.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseCXXClass(): CXXClass {
  return {
    id: undefined,
    name: undefined,
    fields: [],
    methods: [],
    bases: [],
    relations: [],
    location: undefined,
    namespace: undefined,
    typeAliases: [],
    enums: [],
    constants: [],
    isStruct: undefined,
  };
}

export const CXXClass = {
  encode(message: CXXClass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.fields) {
      CXXField.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.methods) {
      CXXFunction.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.bases) {
      CXXBase.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.relations) {
      CXXClassRelation.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.location !== undefined) {
      Location.encode(message.location, writer.uint32(58).fork()).ldelim();
    }
    if (message.namespace !== undefined) {
      writer.uint32(66).string(message.namespace);
    }
    for (const v of message.typeAliases) {
      TypeAlias.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.enums) {
      Enum.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.constants) {
      Constant.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.isStruct !== undefined) {
      writer.uint32(96).bool(message.isStruct);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CXXClass {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCXXClass();
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

          message.fields.push(CXXField.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.methods.push(CXXFunction.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.bases.push(CXXBase.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.relations.push(CXXClassRelation.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.location = Location.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.namespace = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.typeAliases.push(TypeAlias.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.enums.push(Enum.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.constants.push(Constant.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.isStruct = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CXXClass {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      fields: Array.isArray(object?.fields) ? object.fields.map((e: any) => CXXField.fromJSON(e)) : [],
      methods: Array.isArray(object?.methods) ? object.methods.map((e: any) => CXXFunction.fromJSON(e)) : [],
      bases: Array.isArray(object?.bases) ? object.bases.map((e: any) => CXXBase.fromJSON(e)) : [],
      relations: Array.isArray(object?.relations) ? object.relations.map((e: any) => CXXClassRelation.fromJSON(e)) : [],
      location: isSet(object.location) ? Location.fromJSON(object.location) : undefined,
      namespace: isSet(object.namespace) ? String(object.namespace) : undefined,
      typeAliases: Array.isArray(object?.typeAliases) ? object.typeAliases.map((e: any) => TypeAlias.fromJSON(e)) : [],
      enums: Array.isArray(object?.enums) ? object.enums.map((e: any) => Enum.fromJSON(e)) : [],
      constants: Array.isArray(object?.constants) ? object.constants.map((e: any) => Constant.fromJSON(e)) : [],
      isStruct: isSet(object.isStruct) ? Boolean(object.isStruct) : undefined,
    };
  },

  toJSON(message: CXXClass): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    if (message.fields) {
      obj.fields = message.fields.map((e) => e ? CXXField.toJSON(e) : undefined);
    } else {
      obj.fields = [];
    }
    if (message.methods) {
      obj.methods = message.methods.map((e) => e ? CXXFunction.toJSON(e) : undefined);
    } else {
      obj.methods = [];
    }
    if (message.bases) {
      obj.bases = message.bases.map((e) => e ? CXXBase.toJSON(e) : undefined);
    } else {
      obj.bases = [];
    }
    if (message.relations) {
      obj.relations = message.relations.map((e) => e ? CXXClassRelation.toJSON(e) : undefined);
    } else {
      obj.relations = [];
    }
    message.location !== undefined && (obj.location = message.location ? Location.toJSON(message.location) : undefined);
    message.namespace !== undefined && (obj.namespace = message.namespace);
    if (message.typeAliases) {
      obj.typeAliases = message.typeAliases.map((e) => e ? TypeAlias.toJSON(e) : undefined);
    } else {
      obj.typeAliases = [];
    }
    if (message.enums) {
      obj.enums = message.enums.map((e) => e ? Enum.toJSON(e) : undefined);
    } else {
      obj.enums = [];
    }
    if (message.constants) {
      obj.constants = message.constants.map((e) => e ? Constant.toJSON(e) : undefined);
    } else {
      obj.constants = [];
    }
    message.isStruct !== undefined && (obj.isStruct = message.isStruct);
    return obj;
  },

  create<I extends Exact<DeepPartial<CXXClass>, I>>(base?: I): CXXClass {
    return CXXClass.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CXXClass>, I>>(object: I): CXXClass {
    const message = createBaseCXXClass();
    message.id = object.id ?? undefined;
    message.name = object.name ?? undefined;
    message.fields = object.fields?.map((e) => CXXField.fromPartial(e)) || [];
    message.methods = object.methods?.map((e) => CXXFunction.fromPartial(e)) || [];
    message.bases = object.bases?.map((e) => CXXBase.fromPartial(e)) || [];
    message.relations = object.relations?.map((e) => CXXClassRelation.fromPartial(e)) || [];
    message.location = (object.location !== undefined && object.location !== null)
      ? Location.fromPartial(object.location)
      : undefined;
    message.namespace = object.namespace ?? undefined;
    message.typeAliases = object.typeAliases?.map((e) => TypeAlias.fromPartial(e)) || [];
    message.enums = object.enums?.map((e) => Enum.fromPartial(e)) || [];
    message.constants = object.constants?.map((e) => Constant.fromPartial(e)) || [];
    message.isStruct = object.isStruct ?? undefined;
    return message;
  },
};

function createBaseCXXFunction(): CXXFunction {
  return {
    returnType: undefined,
    name: undefined,
    params: [],
    access: undefined,
    relations: [],
    className: undefined,
    isVirtual: undefined,
    isPureVirtual: undefined,
    isExplicit: undefined,
    isTemplate: undefined,
    isConstructor: undefined,
    isDestructor: undefined,
    isStatic: undefined,
    fullName: undefined,
  };
}

export const CXXFunction = {
  encode(message: CXXFunction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.returnType !== undefined) {
      CXXType.encode(message.returnType, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.params) {
      CXXParam.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.access !== undefined) {
      CXXAccess.encode(message.access, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.relations) {
      CXXFunctionRelation.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.className !== undefined) {
      writer.uint32(50).string(message.className);
    }
    if (message.isVirtual !== undefined) {
      writer.uint32(56).bool(message.isVirtual);
    }
    if (message.isPureVirtual !== undefined) {
      writer.uint32(64).bool(message.isPureVirtual);
    }
    if (message.isExplicit !== undefined) {
      writer.uint32(72).bool(message.isExplicit);
    }
    if (message.isTemplate !== undefined) {
      writer.uint32(80).bool(message.isTemplate);
    }
    if (message.isConstructor !== undefined) {
      writer.uint32(88).bool(message.isConstructor);
    }
    if (message.isDestructor !== undefined) {
      writer.uint32(96).bool(message.isDestructor);
    }
    if (message.isStatic !== undefined) {
      writer.uint32(104).bool(message.isStatic);
    }
    if (message.fullName !== undefined) {
      writer.uint32(114).string(message.fullName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CXXFunction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCXXFunction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.returnType = CXXType.decode(reader, reader.uint32());
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

          message.params.push(CXXParam.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.access = CXXAccess.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.relations.push(CXXFunctionRelation.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.className = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.isVirtual = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.isPureVirtual = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.isExplicit = reader.bool();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.isTemplate = reader.bool();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.isConstructor = reader.bool();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.isDestructor = reader.bool();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.isStatic = reader.bool();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.fullName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CXXFunction {
    return {
      returnType: isSet(object.returnType) ? CXXType.fromJSON(object.returnType) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      params: Array.isArray(object?.params) ? object.params.map((e: any) => CXXParam.fromJSON(e)) : [],
      access: isSet(object.access) ? CXXAccess.fromJSON(object.access) : undefined,
      relations: Array.isArray(object?.relations)
        ? object.relations.map((e: any) => CXXFunctionRelation.fromJSON(e))
        : [],
      className: isSet(object.className) ? String(object.className) : undefined,
      isVirtual: isSet(object.isVirtual) ? Boolean(object.isVirtual) : undefined,
      isPureVirtual: isSet(object.isPureVirtual) ? Boolean(object.isPureVirtual) : undefined,
      isExplicit: isSet(object.isExplicit) ? Boolean(object.isExplicit) : undefined,
      isTemplate: isSet(object.isTemplate) ? Boolean(object.isTemplate) : undefined,
      isConstructor: isSet(object.isConstructor) ? Boolean(object.isConstructor) : undefined,
      isDestructor: isSet(object.isDestructor) ? Boolean(object.isDestructor) : undefined,
      isStatic: isSet(object.isStatic) ? Boolean(object.isStatic) : undefined,
      fullName: isSet(object.fullName) ? String(object.fullName) : undefined,
    };
  },

  toJSON(message: CXXFunction): unknown {
    const obj: any = {};
    message.returnType !== undefined &&
      (obj.returnType = message.returnType ? CXXType.toJSON(message.returnType) : undefined);
    message.name !== undefined && (obj.name = message.name);
    if (message.params) {
      obj.params = message.params.map((e) => e ? CXXParam.toJSON(e) : undefined);
    } else {
      obj.params = [];
    }
    message.access !== undefined && (obj.access = message.access ? CXXAccess.toJSON(message.access) : undefined);
    if (message.relations) {
      obj.relations = message.relations.map((e) => e ? CXXFunctionRelation.toJSON(e) : undefined);
    } else {
      obj.relations = [];
    }
    message.className !== undefined && (obj.className = message.className);
    message.isVirtual !== undefined && (obj.isVirtual = message.isVirtual);
    message.isPureVirtual !== undefined && (obj.isPureVirtual = message.isPureVirtual);
    message.isExplicit !== undefined && (obj.isExplicit = message.isExplicit);
    message.isTemplate !== undefined && (obj.isTemplate = message.isTemplate);
    message.isConstructor !== undefined && (obj.isConstructor = message.isConstructor);
    message.isDestructor !== undefined && (obj.isDestructor = message.isDestructor);
    message.isStatic !== undefined && (obj.isStatic = message.isStatic);
    message.fullName !== undefined && (obj.fullName = message.fullName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CXXFunction>, I>>(base?: I): CXXFunction {
    return CXXFunction.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CXXFunction>, I>>(object: I): CXXFunction {
    const message = createBaseCXXFunction();
    message.returnType = (object.returnType !== undefined && object.returnType !== null)
      ? CXXType.fromPartial(object.returnType)
      : undefined;
    message.name = object.name ?? undefined;
    message.params = object.params?.map((e) => CXXParam.fromPartial(e)) || [];
    message.access = (object.access !== undefined && object.access !== null)
      ? CXXAccess.fromPartial(object.access)
      : undefined;
    message.relations = object.relations?.map((e) => CXXFunctionRelation.fromPartial(e)) || [];
    message.className = object.className ?? undefined;
    message.isVirtual = object.isVirtual ?? undefined;
    message.isPureVirtual = object.isPureVirtual ?? undefined;
    message.isExplicit = object.isExplicit ?? undefined;
    message.isTemplate = object.isTemplate ?? undefined;
    message.isConstructor = object.isConstructor ?? undefined;
    message.isDestructor = object.isDestructor ?? undefined;
    message.isStatic = object.isStatic ?? undefined;
    message.fullName = object.fullName ?? undefined;
    return message;
  },
};

function createBaseLocation(): Location {
  return { line: undefined, column: undefined, path: undefined };
}

export const Location = {
  encode(message: Location, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Location {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocation();
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

  fromJSON(object: any): Location {
    return {
      line: isSet(object.line) ? Number(object.line) : undefined,
      column: isSet(object.column) ? Number(object.column) : undefined,
      path: isSet(object.path) ? String(object.path) : undefined,
    };
  },

  toJSON(message: Location): unknown {
    const obj: any = {};
    message.line !== undefined && (obj.line = Math.round(message.line));
    message.column !== undefined && (obj.column = Math.round(message.column));
    message.path !== undefined && (obj.path = message.path);
    return obj;
  },

  create<I extends Exact<DeepPartial<Location>, I>>(base?: I): Location {
    return Location.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Location>, I>>(object: I): Location {
    const message = createBaseLocation();
    message.line = object.line ?? undefined;
    message.column = object.column ?? undefined;
    message.path = object.path ?? undefined;
    return message;
  },
};

function createBaseCXXType(): CXXType {
  return { id: undefined, name: undefined, associatedTypes: [] };
}

export const CXXType = {
  encode(message: CXXType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.associatedTypes) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CXXType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCXXType();
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

          message.associatedTypes.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CXXType {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      associatedTypes: Array.isArray(object?.associatedTypes) ? object.associatedTypes.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CXXType): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    if (message.associatedTypes) {
      obj.associatedTypes = message.associatedTypes.map((e) => e);
    } else {
      obj.associatedTypes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CXXType>, I>>(base?: I): CXXType {
    return CXXType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CXXType>, I>>(object: I): CXXType {
    const message = createBaseCXXType();
    message.id = object.id ?? undefined;
    message.name = object.name ?? undefined;
    message.associatedTypes = object.associatedTypes?.map((e) => e) || [];
    return message;
  },
};

function createBaseCXXParam(): CXXParam {
  return { type: undefined, name: undefined, defaultValue: undefined };
}

export const CXXParam = {
  encode(message: CXXParam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== undefined) {
      CXXType.encode(message.type, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.defaultValue !== undefined) {
      writer.uint32(26).string(message.defaultValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CXXParam {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCXXParam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = CXXType.decode(reader, reader.uint32());
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

          message.defaultValue = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CXXParam {
    return {
      type: isSet(object.type) ? CXXType.fromJSON(object.type) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      defaultValue: isSet(object.defaultValue) ? String(object.defaultValue) : undefined,
    };
  },

  toJSON(message: CXXParam): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type ? CXXType.toJSON(message.type) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
    return obj;
  },

  create<I extends Exact<DeepPartial<CXXParam>, I>>(base?: I): CXXParam {
    return CXXParam.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CXXParam>, I>>(object: I): CXXParam {
    const message = createBaseCXXParam();
    message.type = (object.type !== undefined && object.type !== null) ? CXXType.fromPartial(object.type) : undefined;
    message.name = object.name ?? undefined;
    message.defaultValue = object.defaultValue ?? undefined;
    return message;
  },
};

function createBaseCXXAccess(): CXXAccess {
  return { name: "", symbol: "" };
}

export const CXXAccess = {
  encode(message: CXXAccess, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CXXAccess {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCXXAccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.symbol = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CXXAccess {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
    };
  },

  toJSON(message: CXXAccess): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    return obj;
  },

  create<I extends Exact<DeepPartial<CXXAccess>, I>>(base?: I): CXXAccess {
    return CXXAccess.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CXXAccess>, I>>(object: I): CXXAccess {
    const message = createBaseCXXAccess();
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    return message;
  },
};

function createBaseCXXField(): CXXField {
  return { type: undefined, name: undefined, access: undefined };
}

export const CXXField = {
  encode(message: CXXField, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== undefined) {
      CXXType.encode(message.type, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.access !== undefined) {
      CXXAccess.encode(message.access, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CXXField {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCXXField();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = CXXType.decode(reader, reader.uint32());
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

          message.access = CXXAccess.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CXXField {
    return {
      type: isSet(object.type) ? CXXType.fromJSON(object.type) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      access: isSet(object.access) ? CXXAccess.fromJSON(object.access) : undefined,
    };
  },

  toJSON(message: CXXField): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type ? CXXType.toJSON(message.type) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.access !== undefined && (obj.access = message.access ? CXXAccess.toJSON(message.access) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CXXField>, I>>(base?: I): CXXField {
    return CXXField.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CXXField>, I>>(object: I): CXXField {
    const message = createBaseCXXField();
    message.type = (object.type !== undefined && object.type !== null) ? CXXType.fromPartial(object.type) : undefined;
    message.name = object.name ?? undefined;
    message.access = (object.access !== undefined && object.access !== null)
      ? CXXAccess.fromPartial(object.access)
      : undefined;
    return message;
  },
};

function createBaseCXXBase(): CXXBase {
  return { type: undefined, access: undefined, isVirtual: undefined };
}

export const CXXBase = {
  encode(message: CXXBase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== undefined) {
      CXXType.encode(message.type, writer.uint32(10).fork()).ldelim();
    }
    if (message.access !== undefined) {
      CXXAccess.encode(message.access, writer.uint32(18).fork()).ldelim();
    }
    if (message.isVirtual !== undefined) {
      writer.uint32(24).bool(message.isVirtual);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CXXBase {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCXXBase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = CXXType.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.access = CXXAccess.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isVirtual = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CXXBase {
    return {
      type: isSet(object.type) ? CXXType.fromJSON(object.type) : undefined,
      access: isSet(object.access) ? CXXAccess.fromJSON(object.access) : undefined,
      isVirtual: isSet(object.isVirtual) ? Boolean(object.isVirtual) : undefined,
    };
  },

  toJSON(message: CXXBase): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type ? CXXType.toJSON(message.type) : undefined);
    message.access !== undefined && (obj.access = message.access ? CXXAccess.toJSON(message.access) : undefined);
    message.isVirtual !== undefined && (obj.isVirtual = message.isVirtual);
    return obj;
  },

  create<I extends Exact<DeepPartial<CXXBase>, I>>(base?: I): CXXBase {
    return CXXBase.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CXXBase>, I>>(object: I): CXXBase {
    const message = createBaseCXXBase();
    message.type = (object.type !== undefined && object.type !== null) ? CXXType.fromPartial(object.type) : undefined;
    message.access = (object.access !== undefined && object.access !== null)
      ? CXXAccess.fromPartial(object.access)
      : undefined;
    message.isVirtual = object.isVirtual ?? undefined;
    return message;
  },
};

function createBaseTypeAlias(): TypeAlias {
  return { name: "", type: undefined };
}

export const TypeAlias = {
  encode(message: TypeAlias, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== undefined) {
      CXXType.encode(message.type, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TypeAlias {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTypeAlias();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = CXXType.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TypeAlias {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? CXXType.fromJSON(object.type) : undefined,
    };
  },

  toJSON(message: TypeAlias): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = message.type ? CXXType.toJSON(message.type) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<TypeAlias>, I>>(base?: I): TypeAlias {
    return TypeAlias.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TypeAlias>, I>>(object: I): TypeAlias {
    const message = createBaseTypeAlias();
    message.name = object.name ?? "";
    message.type = (object.type !== undefined && object.type !== null) ? CXXType.fromPartial(object.type) : undefined;
    return message;
  },
};

function createBaseEnum(): Enum {
  return { name: "", constants: [] };
}

export const Enum = {
  encode(message: Enum, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.constants) {
      EnumConstant.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Enum {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnum();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.constants.push(EnumConstant.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Enum {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      constants: Array.isArray(object?.constants) ? object.constants.map((e: any) => EnumConstant.fromJSON(e)) : [],
    };
  },

  toJSON(message: Enum): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.constants) {
      obj.constants = message.constants.map((e) => e ? EnumConstant.toJSON(e) : undefined);
    } else {
      obj.constants = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Enum>, I>>(base?: I): Enum {
    return Enum.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Enum>, I>>(object: I): Enum {
    const message = createBaseEnum();
    message.name = object.name ?? "";
    message.constants = object.constants?.map((e) => EnumConstant.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEnumConstant(): EnumConstant {
  return { name: "", value: 0 };
}

export const EnumConstant = {
  encode(message: EnumConstant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumConstant {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumConstant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EnumConstant {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: EnumConstant): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<EnumConstant>, I>>(base?: I): EnumConstant {
    return EnumConstant.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EnumConstant>, I>>(object: I): EnumConstant {
    const message = createBaseEnumConstant();
    message.name = object.name ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseConstant(): Constant {
  return { name: "", type: undefined, value: "" };
}

export const Constant = {
  encode(message: Constant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== undefined) {
      CXXType.encode(message.type, writer.uint32(18).fork()).ldelim();
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Constant {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConstant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = CXXType.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Constant {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? CXXType.fromJSON(object.type) : undefined,
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Constant): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = message.type ? CXXType.toJSON(message.type) : undefined);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<Constant>, I>>(base?: I): Constant {
    return Constant.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Constant>, I>>(object: I): Constant {
    const message = createBaseConstant();
    message.name = object.name ?? "";
    message.type = (object.type !== undefined && object.type !== null) ? CXXType.fromPartial(object.type) : undefined;
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCXXInclusion(): CXXInclusion {
  return { path: undefined, location: undefined };
}

export const CXXInclusion = {
  encode(message: CXXInclusion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== undefined) {
      writer.uint32(10).string(message.path);
    }
    if (message.location !== undefined) {
      Location.encode(message.location, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CXXInclusion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCXXInclusion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.location = Location.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CXXInclusion {
    return {
      path: isSet(object.path) ? String(object.path) : undefined,
      location: isSet(object.location) ? Location.fromJSON(object.location) : undefined,
    };
  },

  toJSON(message: CXXInclusion): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.location !== undefined && (obj.location = message.location ? Location.toJSON(message.location) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CXXInclusion>, I>>(base?: I): CXXInclusion {
    return CXXInclusion.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CXXInclusion>, I>>(object: I): CXXInclusion {
    const message = createBaseCXXInclusion();
    message.path = object.path ?? undefined;
    message.location = (object.location !== undefined && object.location !== null)
      ? Location.fromPartial(object.location)
      : undefined;
    return message;
  },
};

function createBaseCXXClassRelation(): CXXClassRelation {
  return { kind: undefined, from: undefined, to: undefined };
}

export const CXXClassRelation = {
  encode(message: CXXClassRelation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind !== undefined) {
      writer.uint32(8).int32(message.kind);
    }
    if (message.from !== undefined) {
      writer.uint32(18).string(message.from);
    }
    if (message.to !== undefined) {
      writer.uint32(26).string(message.to);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CXXClassRelation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCXXClassRelation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.kind = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.from = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.to = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CXXClassRelation {
    return {
      kind: isSet(object.kind) ? cXXClassRelation_RelationKindFromJSON(object.kind) : undefined,
      from: isSet(object.from) ? String(object.from) : undefined,
      to: isSet(object.to) ? String(object.to) : undefined,
    };
  },

  toJSON(message: CXXClassRelation): unknown {
    const obj: any = {};
    message.kind !== undefined &&
      (obj.kind = message.kind !== undefined ? cXXClassRelation_RelationKindToJSON(message.kind) : undefined);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },

  create<I extends Exact<DeepPartial<CXXClassRelation>, I>>(base?: I): CXXClassRelation {
    return CXXClassRelation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CXXClassRelation>, I>>(object: I): CXXClassRelation {
    const message = createBaseCXXClassRelation();
    message.kind = object.kind ?? undefined;
    message.from = object.from ?? undefined;
    message.to = object.to ?? undefined;
    return message;
  },
};

function createBaseCXXFunctionRelation(): CXXFunctionRelation {
  return { kind: undefined, from: undefined, to: undefined };
}

export const CXXFunctionRelation = {
  encode(message: CXXFunctionRelation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind !== undefined) {
      writer.uint32(8).int32(message.kind);
    }
    if (message.from !== undefined) {
      CXXFunction.encode(message.from, writer.uint32(18).fork()).ldelim();
    }
    if (message.to !== undefined) {
      CXXFunction.encode(message.to, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CXXFunctionRelation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCXXFunctionRelation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.kind = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.from = CXXFunction.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.to = CXXFunction.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CXXFunctionRelation {
    return {
      kind: isSet(object.kind) ? cXXFunctionRelation_RelationKindFromJSON(object.kind) : undefined,
      from: isSet(object.from) ? CXXFunction.fromJSON(object.from) : undefined,
      to: isSet(object.to) ? CXXFunction.fromJSON(object.to) : undefined,
    };
  },

  toJSON(message: CXXFunctionRelation): unknown {
    const obj: any = {};
    message.kind !== undefined &&
      (obj.kind = message.kind !== undefined ? cXXFunctionRelation_RelationKindToJSON(message.kind) : undefined);
    message.from !== undefined && (obj.from = message.from ? CXXFunction.toJSON(message.from) : undefined);
    message.to !== undefined && (obj.to = message.to ? CXXFunction.toJSON(message.to) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CXXFunctionRelation>, I>>(base?: I): CXXFunctionRelation {
    return CXXFunctionRelation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CXXFunctionRelation>, I>>(object: I): CXXFunctionRelation {
    const message = createBaseCXXFunctionRelation();
    message.kind = object.kind ?? undefined;
    message.from = (object.from !== undefined && object.from !== null)
      ? CXXFunction.fromPartial(object.from)
      : undefined;
    message.to = (object.to !== undefined && object.to !== null) ? CXXFunction.fromPartial(object.to) : undefined;
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
