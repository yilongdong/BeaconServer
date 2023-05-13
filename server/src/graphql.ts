
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Access {
    PUBLIC = "PUBLIC",
    PROTECTED = "PROTECTED",
    PRIVATE = "PRIVATE",
    UNKNOWN = "UNKNOWN"
}

export enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
}

export class CreateClassInput {
    name: string;
    location: LocationInput;
}

export class UpdateClassInput {
    id: string;
}

export class LocationInput {
    line: number;
    column: number;
    path: string;
}

export class GitCommitInput {
    time: string;
}

export class CLOCInput {
    language: string;
    blank: number;
    comment: number;
    code: number;
}

export class CYCLOInput {
    functionName: string;
    lineOfCode: number;
    cyclo: number;
    tokenCount: number;
    parameterCount: number;
}

export class FunctionRelationInput {
    from: string;
    to: string;
}

export class InclusionInput {
    path: string;
    line: number;
    column: number;
}

export class CreateFileInput {
    path: string;
}

export class UpdateFileGitCommitsInput {
    id: string;
    gitCommits: GitCommitInput[];
}

export class UpdateFileInclusionsInput {
    id: string;
    inclusions: InclusionInput[];
}

export class UpdateFileCLOCInput {
    id: string;
    CLOC: CLOCInput;
}

export class UpdateFileCYCLOInput {
    id: string;
    CYCLO: CYCLOInput[];
}

export class CreateFunctionInput {
    name: string;
    isStatic: boolean;
}

export class UpdateFunctionInput {
    id: string;
}

export class CreateProjectInput {
    name: string;
    principalIDs?: Nullable<string[]>;
}

export class UpdateProjectInput {
    id: string;
    name: string;
    principalIDs?: Nullable<string[]>;
}

export class AddPrincipalForProjectInput {
    projectID: string;
    principalID: string;
}

export class CreateUserInput {
    name: string;
    role?: Nullable<Role>;
}

export class UpdateUserInput {
    id: string;
    name: string;
    role: Role;
}

export abstract class IQuery {
    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;

    abstract projects(): Nullable<Project>[] | Promise<Nullable<Project>[]>;

    abstract project(id: string): Nullable<Project> | Promise<Nullable<Project>>;

    abstract functions(): Nullable<Function>[] | Promise<Nullable<Function>[]>;

    abstract function(id: string): Nullable<Function> | Promise<Nullable<Function>>;

    abstract files(): Nullable<File>[] | Promise<Nullable<File>[]>;

    abstract file(id: string): Nullable<File> | Promise<Nullable<File>>;

    abstract classes(): Nullable<Class>[] | Promise<Nullable<Class>[]>;

    abstract class(id: string): Nullable<Class> | Promise<Nullable<Class>>;
}

export abstract class IMutation {
    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;

    abstract createProject(createProjectInput: CreateProjectInput): Project | Promise<Project>;

    abstract updateProject(updateProjectInput: UpdateProjectInput): Project | Promise<Project>;

    abstract removeProject(id: number): Nullable<Project> | Promise<Nullable<Project>>;

    abstract createFunction(createFunctionInput: CreateFunctionInput): Function | Promise<Function>;

    abstract updateFunction(updateFunctionInput: UpdateFunctionInput): Function | Promise<Function>;

    abstract removeFunction(id: number): Nullable<Function> | Promise<Nullable<Function>>;

    abstract createFile(createFileInput: CreateFileInput): File | Promise<File>;

    abstract updateFileCLOC(updateFileCLOCInput: UpdateFileCLOCInput): File | Promise<File>;

    abstract updateFileCYCLO(updateFileCYCLOInput: UpdateFileCYCLOInput): File | Promise<File>;

    abstract updateFileGitCommits(updateFileGitCommitsInput: UpdateFileGitCommitsInput): File | Promise<File>;

    abstract updateFileInclusions(updateFileInclusionsInput: UpdateFileInclusionsInput): File | Promise<File>;

    abstract removeFile(id: number): Nullable<File> | Promise<Nullable<File>>;

    abstract createClass(createClassInput: CreateClassInput): Class | Promise<Class>;

    abstract updateClass(updateClassInput: UpdateClassInput): Class | Promise<Class>;

    abstract removeClass(id: number): Nullable<Class> | Promise<Nullable<Class>>;
}

export class Class {
    id: string;
    name: string;
    fields: CXXField[];
    methods: Function[];
    bases: Base[];
    relations?: Nullable<ClassRelation[]>;
    location: Location;
    namespace?: Nullable<string>;
    isStruct?: Nullable<boolean>;
}

export class ClassRelation {
    from: string;
    to: string;
}

export class Base {
    type: Type;
    access: Access;
    name: string;
    isVirtual?: Nullable<boolean>;
}

export class CXXField {
    type: Type;
    name: string;
}

export class Location {
    line: number;
    column: number;
    path: string;
}

export class Type {
    name: string;
    associatedType: string[];
}

export class File {
    id: string;
    createdAt: string;
    updatedAt: string;
    path: string;
    filename: string;
    directory: string;
    gitCommits: GitCommit[];
    inclusions: Inclusion[];
    CLOCInfo?: Nullable<CLOC>;
    CYCLOInfo?: Nullable<CYCLO[]>;
    classes: Class[];
    functions: Function[];
    callgraph: FunctionRelation[];
}

export class FunctionRelation {
    from: string;
    to: string;
}

export class Inclusion {
    path: string;
    line: number;
    column: number;
}

export class CYCLO {
    functionName: string;
    lineOfCode: number;
    cyclo: number;
    tokenCount: number;
    parameterCount: number;
}

export class CLOC {
    language: string;
    blank: number;
    comment: number;
    code: number;
}

export class GitCommit {
    time: string;
}

export class Function {
    id: string;
    name: string;
    params: Param[];
    returnType?: Nullable<Type[]>;
    access: Access;
    isVirtual?: Nullable<boolean>;
    isPureVirtual?: Nullable<boolean>;
    isStatic: boolean;
    isConstructor?: Nullable<boolean>;
    isDestructor?: Nullable<boolean>;
    fullname: string;
    classname?: Nullable<string>;
}

export class Param {
    type: Type;
    name?: Nullable<string>;
    defaultValue?: Nullable<string>;
}

export class Project {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    principals?: Nullable<User[]>;
    files?: Nullable<File[]>;
}

export class User {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    role: Role;
    projects?: Nullable<Project[]>;
}

type Nullable<T> = T | null;
