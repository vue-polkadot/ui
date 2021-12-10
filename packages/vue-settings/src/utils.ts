import { Option } from './types';

export const equalsOrLocal = (value: string) => (option: Option) => option.info === value || option.info === 'local';

export const isManual = (value: string): boolean => value === 'manual'
