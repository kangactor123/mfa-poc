
    export type RemoteKeys = 'remote/button' | 'remote/inject';
    type PackageType<T> = T extends 'remote/inject' ? typeof import('remote/inject') :T extends 'remote/button' ? typeof import('remote/button') :any;