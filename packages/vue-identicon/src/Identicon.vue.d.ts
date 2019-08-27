import { Vue } from 'vue-property-decorator';
import { IconProperties } from './types';
export default class Identicon extends Vue {
    private value;
    private size;
    private theme;
    readonly iconProperties: IconProperties;
    readonly currentComponent: string;
}
