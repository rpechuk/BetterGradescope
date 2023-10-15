import {
  BaseStorage,
  createStorage,
  StorageType,
} from "@src/shared/storages/base";

type Theme = {
  color: string;
};

type ThemeStorage = BaseStorage<Theme> & {
};

const storage = createStorage<Theme>("theme-storage-key", {color: "#1a5059"}, {
  storageType: StorageType.Local,
});

const themeStorage: ThemeStorage = {
  ...storage,
};

export default themeStorage;
