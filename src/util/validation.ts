//interface
export interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export const validate = (validateObj: Validatable) => {
  let valid = true;
  if (validateObj.required) {
    valid = valid && validateObj.value.toString().trim().length !== 0;
  }
  if (validateObj.minLength != null && typeof validateObj.value === "string") {
    valid = valid && validateObj.value.length >= validateObj.minLength;
  }
  if (validateObj.maxLength != null && typeof validateObj.value === "string") {
    valid = valid && validateObj.value.length <= validateObj.maxLength;
  }
  if (validateObj.min != null && typeof validateObj.value === "number") {
    valid = valid && validateObj.value >= validateObj.min;
  }
  if (validateObj.max != null && typeof validateObj.value === "number") {
    valid = valid && validateObj.value <= validateObj.max;
  }
  return valid;
};
