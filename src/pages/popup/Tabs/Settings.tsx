import useStorage from "@root/src/shared/hooks/useStorage";
import themeStorage from "@root/src/shared/storages/themeStorage";
import { ColorPicker } from 'antd';

const Settings = () => {
    const theme = useStorage(themeStorage)
    
    return (
        <div className="">
            <ColorPicker disabledAlpha
                arrow={false}
                size="small"
                onChange={(color) => themeStorage.set({ color: color.toHexString()})}
                style={{ color: 'white'}}
            />
        </div>
    );
};

export default Settings;