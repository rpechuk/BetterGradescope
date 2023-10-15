import {
  BaseStorage,
  createStorage,
  StorageType,
} from "@src/shared/storages/base";

export type User = {
  quarter?: {
    class: {
      name: string,
      href: string,
      assignments: {
        name: string,
        href: string,
        dueDate: string,
        submitted: boolean,
        points: number,
        totalPoints: number,
      }[]
    }[]
  }[]
};

type DataStorage = BaseStorage<User> & {
  //add methods here
};

const storage = createStorage<User>("gradescope-user-info", {}, {
  storageType: StorageType.Local,
});

const dataStorage: DataStorage = {
  ...storage,
};

export default dataStorage;
