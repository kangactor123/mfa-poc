
    export type RemoteKeys = 'remote/injector' | 'remote/store';
    type PackageType<T> = T extends 'remote/store' ? typeof import('remote/store') :T extends 'remote/injector' ? typeof import('remote/injector') :any;