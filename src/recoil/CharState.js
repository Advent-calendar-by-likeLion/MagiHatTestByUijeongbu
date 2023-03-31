import {atom} from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { charArray1 } from './charArray';

const { persistAtom } = recoilPersist({
    key: "recoil-persist-atom",
    storage: localStorage,
});

export const userState = atom({
    key: "userState",
    default: charArray1[0],
    effects_UNSTABLE: [persistAtom],
});