
    export type RemoteKeys = 'webpack_remote/Store';
    type PackageType<T> = T extends 'webpack_remote/Store' ? typeof import('webpack_remote/Store') :any;