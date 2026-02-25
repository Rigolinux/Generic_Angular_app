export type DynamicFormFieldType = 'input-text' | 'input-number' | 'select' | 'date-picker';

export interface DynamicFormFieldConfig {
  key: string;
  label: string;
  type: DynamicFormFieldType;
  options?: { label: string; value: any }[];
  placeholder?: string;
  required?: boolean;
}
