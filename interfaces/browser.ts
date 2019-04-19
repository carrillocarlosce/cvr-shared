import 'firebase';
export interface ContextualMenuOption {
    name: string,
    action?(): void,
    close?: boolean 
}

export interface BrowserItemType {
    id?: string;
    parent?: string | null;
    elements?: number;
    name?: string;
    path?: string;
    contentType?: string;
    filePath?: string;
    size?: string;
    userId?: string;
    delete?(): Promise<void>;
    rename?(name: string): Promise<void>;
}

export interface BrowserType {
    ownerUserId: string;
    viewerUserId: string;
    classes: any;
    onFileUpload?(
        event: React.ChangeEvent<HTMLInputElement>, 
        directory: BrowserItemType,
        ownerId: string,
        uploaderId: string,
        onProgress: any): void;
    selected?: BrowserItemType;
    onItemClick?(item: BrowserItemType): void;
    onUploadProgress?(uploadTask: firebase.storage.UploadTask): void;
}