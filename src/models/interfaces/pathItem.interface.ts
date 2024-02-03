export interface PathItemModel {
    title: string;
    path: string;
    parmas: string;
    showInMenue: boolean;
}

export interface PathItemObjectModel {
    [key: string]: PathItemModel
}